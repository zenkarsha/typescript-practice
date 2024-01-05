// hello world
const message: string = "fuck the world";
console.log(message.toUpperCase());

// var
let fullname: string = "marchuang";
let age: number = 33;
let working: boolean = true;
let tuple: [string, number, boolean] = ["marchuang", 33, true];

// enum
enum RequestStatus {
  success = 1,
  failed = 0,
}
const current_status = RequestStatus.success;

// union
let weight: string | number;
weight = 45;
weight = "45kg";

// type
type Height = string | number;
let height: Height;
height = 153;
height = "153cm";

// object
let persion = {
  name: "marchuang",
  age: 33,
  working: true,
};

// interface
interface Person {
  name: string;
  age: number;
  working?: boolean;
}

let worker: Person = {
  name: "marchuang",
  age: 33,
};

// function
const sayHello = (
  hello: string,
  message: string,
  greeting?: string,
): string => {
  if (greeting === undefined) return hello + message;

  return hello + message + greeting;
};

// unknown
type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as unknown as Data;
};

// class
class Company {
  public name: string;
  private address: string;
  protected income: number;

  constructor(
    company_name: string,
    company_address: string,
    company_income: number,
  ) {
    this.name = company_name;
    this.address = company_address;
    this.income = company_income;
  }

  revealIncome() {
    console.log(this.income);
  }
}

class ChildCompany extends Company {
  constructor(
    company_name: string,
    company_address: string,
    company_income: number,
  ) {
    super(company_name, company_address, company_income);
  }
}
const marc_company = new Company("Marc inc.", "Earth", 999999);
const little_marc_company = new ChildCompany("Doge inc.", "Moon", 1);

// Generics
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, "x");
createArray<number>(3, 1);
