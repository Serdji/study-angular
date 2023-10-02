import { Component } from '@angular/core';

@Component( {
  selector: 'type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.scss']
} )

export class TypeScriptComponent {
  constructor() {
  }

  /**
   * Базовые типы
   */
  baseType() {
    // Расказать и показать что типы вертуальные а объекты реальные
    interface UserAccount {
      firstName: string;
      age: number;
    }

    // Ошибка из за того, что мы пытаеемся присвоить виртуальную сущьность
    let p1 = UserAccount;

    // Создаем реальный объект
    const userAccount = {
      firstName: 'Ihor',
      age: 33,
    };

    // Захватываем тип с объекта (Утиная типизация)
    let p2: typeof userAccount = {
      firstName: 'Ihor',
      age: 33,
    };

    // Еще один вариант присвоения типа
    let s = 'string';
    let a: typeof s = 'asd';

    // Приметивные типы - сравниваються по значению и передаються по значению
    // Сложные типы - передаються по ссылки и сравниваються по сслыки
    let isDone: boolean = false;
    let str: string = 'some value';
    let num: number = 0;

    // Если возникает ошибка поправить в конфиге тайп скрипта "target": "es2020",  "lib": ["es2020", "dom"]
    // Показать пример в консоле с большими числами 2**53 = 9007199254740992. Попробовать что то прибавить. Пото прибавить 9007199254740992n + 5n
    let bigNum: bigint = 4n;

    let und: undefined = undefined;
    let nill: null = null;
  }

  /**
   * Литеральные типы
   */
  literalType() {

    // Создадим класс анимации и с помощью метода declare. Даем поянть что такой класс у нас уже есть
    declare class UIElement {
      animate( options: AnimateOptions ): void;
    }

    // Показаять приер вначале easing: string и вызвать ниже с неправильным литеральным типом
    // Потом показать приер как можно создать литеральные типы и уже вызывать с правильным типом
    interface AnimateOptions {
      delayX: number;
      // easing: string;
      easing: 'ease-in' | 'ease-out';
    }

    // new UIElement().animate( { delayX: 1000, easing: 'easein' } );
    new UIElement().animate( { delayX: 1000, easing: 'ease-in' } );

    // Такой же пример с литеральными типами
    type Digit = 1 | 2 | 3 | 4 | true;
    let num: Digit = true;

    // Создаем енумы, показываем как они будут форматироваться на официальной документации тайпскрипта
    enum Actions {
      Top,
      Right,
      Left,
      Bottom,
    };

    // Хотим вытащить литеральный тип
    // keyof - идем по ключам енума
    // typeof - типезируем ключи и получаються из ключей литеральные типы
    let direction: keyof ( typeof Actions ) = 'Top';


    // Создаем некий интерфейс
    interface IFact {
      factId: number;
      userFrom: string;
      userRole: string;
    }

    // Создаем некую функцию, которая возвразает строку
    // Внизу будет ошиба. Ошибка связанна с тем, что восприятия происходит как строки. А нам нужно вернуть индекс factId | userFrom | userRole
    // Для этого мы передаем чисто литерал
    // const uniqueValue = (): 'factId' => {
    //   return 'factId';
    // };
    // Или все литералы
    // const uniqueValue = (): 'factId' | 'userFrom' | 'userRole' => {
    //   return 'factId';
    // };
    // Или что правильно сделать через keyof, собрав ключи из интерфейса
    // const uniqueValue = (): keyof IFact => {
    //   return 'factId';
    // };
    const uniqueValue = () => {
      return 'factId';
    };

    // Создаем массив сущьностей
    const dataList: { action: string, data: IFact }[] = [];

    // Мапим массив
    dataList.map( ( item: { action: string, data: IFact } ) => {
      if ( item.data[ uniqueValue() ] === 2 ) {

      }
      return item;
    } );

    // Создаим объект пользователя
    const person = {
      name: 'Ihor',
      age: 33,
      info: {
        male: true,
        name: 'Eugene',
      },
    }
    // Делаем захват типа (Утиная типизация)
    type Person = typeof person;
    // Проходим по ключама, создаем литералы. Задаем вопрос, что мы тут увидим. 'name' | 'age' | 'info'
    const keys: keyof Person = 'name';
    // Дальше мы можем типизировать нашь валью следующем способом.
    // Когда мы проходимся по ключам, типы типизация выглядит так name: string, age: number, info: { name: string, male: boolean }
    // const values: Person[keyof Person] = 'Kolya';
    // const values: Person[keyof Person] = 26;
    // const values: Person[keyof Person] = { male: true, name: 'Vasya', };
    // Или так
    const values: Person['name' | 'age' | 'info'] = { male: false, name: 'Vasya' };

    // Так же можем обращаться к типу, по индексу. Ругаеться потому что нужно ставить литеральный тип 'ease-in' | 'ease-out'
    let str: AnimateOptions['easing'] = 1;
  }

  /**
   * Объекты и массивы
   */
  objectAndArr() {

    // Пример создания узера с необязательным типом
    // Модификатор readonly делает поля неизменяемые
    const user: {
      readonly firstName: string,
      readonly age?: number,
    } = {
      firstName: 'Ihor',
    };

    user.age = 22;

    // Создаем сигнатуру индексов, с захватом типа
    let map: {
      [ userName: string ]: typeof user,
    } = {
      'Ihor': {
        firstName: 'Ihor',
      },
    };

    // Создание массива
    // let arr1: Array<number> = [1, 2];
    // let arr2: number[][] = [[1, 2, 3], [2, 3, 4]];

    // Как решить проблематику того, что можно в 100ю яцейку что то присовить используеться ReadonlyArray
    // Так же показать как можно сделать вложанный массив с использгованием захвата типа как пример. Но лучше ReadonlyArray<number>[]
    let arr1: ReadonlyArray<number> = [1, 2];
    let arr2: typeof arr1[] = [[1, 2, 3], [2, 3, 4]];

    // Ругаеться из за того, что мы используем ReadonlyArray. Нельзя пушить в 100ю ячейку. И вообще неизментья массив
    arr2[ 0 ].push();
    arr1[ 100 ] = 1;
    arr1[ 0 ] = 43;


    // Создаем не большеой интерфейс
    type Interface = number | string | typeof user

    // Для начала показывает как созда простой кортедж
    // let arr3: [string, number] = [ 'qwer', 1 ]

    // Создаем кортедж из интерфейсов, более сложный
    let arr3: [Interface, Interface, Interface] = [{
      firstName: 'Ihor',
    }, 'str', 1];

    // Показать, что на 100ю ячейку ругаеться
    // А вот на пуш не ругаеться и это баг
    arr3[ 100 ] = 1;
    arr3.push( 3 );


    // Как можно еще сделать ReadonlyArray. as const. И все теже правила как у ReadonlyArray
    const arr = [10, 12] as const;
    arr.push();
    arr[ 100 ] = 1;

    // Тоже самое относиться и к объектам если добавить as const
    let obj = {
      firstName: 'Ihor',
    } as const;
    obj.firstName = 'Eugene';

  }

  /**
   * Одъяденение и пересечение
   */
  unionTypeAndIntersection() {

    // Что такое unionType - Это пересечение string | number
    // Что такое Intersection - Это объяденение { name: string } & { age: number } | number
    // let sn: string | number = '1';
    // let user: { name: string } & { age: number } | number = {name: 'Ihor', age: 33};

    // Создаем интерфейс работв
    type IWorker = {
      id: number,
      salary?: number,
      info: {
        male: boolean;
      };
    };

    // Создаем интерфейс студента и объеденям с работой
    type IStudent = {
      id: string;
      name: string;
      lectures: string[];
    } & IWorker ;

    // Создаем учителя и объеденяем с работой
    type ITeacher = {
      id: number;
      name: string;
      lessons: string[];
    } & IWorker;


    // Конструкция 'lessons' in person называеться typeGuard. Мы подсвечиваем, в каком типе, что искать
    // спомозью конструкции 'lessons' in person у нас работает или person.lessons у ITeacher или person.lectures у IStudent
    // При других проверках работать не будет, TS не будет понимать, что мы от него хотим
    function getSubjects(person: ITeacher | IStudent) {
      // Разделяем блоки на ITeacher | IStudent
      // В этом блоте будет ITeacher
      if ('lessons' in person) {
        return person.lessons;
      }
      return person.lectures;
    }
  }

}
