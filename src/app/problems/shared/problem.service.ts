import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Http, Response} from "@angular/http";
import {Problem} from "./problem.model";
import {Keyword} from "../../shared/Keyword";

export interface IProblemsOperation extends Function {
  (problems: Problem[]): Problem[];
}

const initialProblems: Problem[] = [];

@Injectable()
export class ProblemService {

  private problemsUrl = `${environment.apiEndpoint}/problems`;
  problems: Observable<Problem[]>;
  currentProblem: Observable<Problem>;
  operations: Subject<IProblemsOperation> = new Subject<IProblemsOperation>();

  index: Subject<string> = new Subject<string>();
  show: Subject<string> = new Subject<string>();

  constructor(private http: Http) {
    this.problems = this.operations
      .scan((problems: Problem[], operation: IProblemsOperation): Problem[] =>
        operation(problems), initialProblems)
      .publishReplay(1)
      .refCount();

    this.index
      .flatMap((requestUrl) => this.http.get(requestUrl))
      .map(this.extractData)
      .map((newProblems): IProblemsOperation =>
        (problems: Problem[]) => newProblems)
      .subscribe(this.operations);

    this.currentProblem = this.show
      .flatMap((requestUrl) => this.http.get(requestUrl))
      .map(this.extractData)
      .map((p) =>
        Object.assign({}, p, {
          keywords: p.keywords.map((k: Keyword) => Object.assign({}, k, {
            content: p.body.substr(k.start, k.length)
          }))
        })
      )
      .publishReplay(1)
      .refCount();
  }

  setCurrentProblem(id: number) {
    let problemUrl = `${this.problemsUrl}/${id}`;
    this.show.next(problemUrl);
  }

  getProblems() {
    this.index.next(this.problemsUrl);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}


