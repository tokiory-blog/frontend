---
title: "[In one Paper]: React"
tags:
  - react
  - frontend
  - onepaper
description: >
  В данном туториале посмотрим на библиотеку для создания интерфейсов — React.
  Данная библиотека является одной из популярных библиотек для создания интерфейсов и
  является аналогом Angular, Vue, Svelte и Preact.
publicationDate: 24 Apr 2023
banner: /banners/react.webp
_draft: true
---

# Компоненты
**Компоненты** - независимая единица структуры приложения. В React с помощью компонентов строится весь интерфейс
(собственно как и в Vue/Svelte/Preact/Angular). Все компоненты в React создаются с помощью JSX, JSX в свою очередь -
расширение синтаксиса JavaScript, которое позволяет писать разметку прямо внутри JavaScript.

По сути каждый дизайн можно разделить на компоненты. Могут быть базовые компоненты (кнопка, поле для ввода, слайдер),
а также компоненты, которые композируют (содержат другие компоненты) (templates, layouts, views).

> Если говорить кратко, то компонент - это функция, которая хранит в себе внутренню логику и верстку UI элемента (например кнопки).
> Преимущство такого подхода в том, что каждый компонент инкапсулирован
> и может быть переиспользован.

Прежде чем мы напишем наш первый компонент, важно подметить несколько деталей:
1. Каждый компонент в React должен начинаться с заглавной буквы. Таким образом React определяет где нативный компонент,
   а где компонент React;
2. Все компоненты React - чистые функции. Вся логика должна быть только **внутри функции**.

```tsx [button.tsx] Самый простой вариант кнопки
const Button = () => {
  return (
    <div className="button"></div>
  )
};

export default Button;
```

Любая верстка созданная внутри JS файла - создана с помощью расширения JSX. Теги, которые мы возвращаем, в свою очередь
не являются просто тегами, JSX превращает данные _элементы_ в JS-объекты. Таким образом React с JSX создает виртуальное
DOM-дерево.

Мы можем написать возвращаемый код и без использования JSX, но выглядеть он будет не так красиво:

```tsx [button-without-jsx.tsx] Компонент без JSX
import { createElement } from 'react';

const Button = () => {
  return createElement(
    'div',
    { className: 'button' }
  );
}
```

## Различия компонента и элемента

Компонент отличается от элемента тем, что у компонента есть
внутренние состояния и обработчики действий. То есть:

```tsx [element-component.tsx]
import { useState } from "react"

// Компонент
const component = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div onClick={() => setCounter(n => n + 1)}>{counter}</div>
  )
}

// Элемент
const element = <div className="counter">0</div>
```

Как мы можем увидеть у `component` есть внутреннее состояние
и инкапсулированная логика.

У `element` же, никакой инкапсулированной логики нет.

# JSX
Наверное, вы уже заметили что мы используем несколько странный синтаксис
для написания HTML. Этот синтаксис называется JSX (JavaScript XML).
По сути JSX расширяет синаксис HTML и добавляет в него возможность писать HTML.

Важно подметить некоторые отличия JSX от HTML:

```jsx [jsx-diffence.jsx]
// class="" пишется как className=""
const classElement = <div className="button"></div>

// Можно сокращать теги, если внутри них ничего нет
const shortElement = <div />

// Все атрибуты (кроме data-) пишутся в регистре camelCase
const camelAttributeElement = <div onClick="alert(1)" />

// Все что находится внутри фигурных скобок ({}) - является
// встраиванием в тег JS
const jsElement = <div onClick={alert(Math.random())}>{Math.random()}</div>
```

Про последнее (фигурные скобки) мы поговорим чуть подробнее.
Дело в том, что фигурные скобки в React/JSX имеют большое значение.
Например, мы можем развернуть стили для компонента:

```tsx [style-component.tsx]
function Button() {
  const buttonStyle = {
    backgroundColor: 'black',
    outline: 'none',
    border: 'none',
    padding: '4px 8px',
  };
  
  return (
    <div style={buttonStyle}>Кнопка!</div>
  )
}
```

Двойные же скобки `{{ ... }}` - обозначают что мы разворачиваем объект, прям внутри атрибута, где используем JSX.
Вот пример кода выше, но уже без `buttonStyle`:

```tsx [raw-style-component.tsx]
function Button() {
  return (
    <div style={{
      backgroundColor: 'black',
      outline: 'none',
      border: 'none',
      padding: '4px 8px',
    }}>Кнопка!</div>
  )
}
```

---

# Отвечаем на ивенты
Представим что у нас есть кнопка:

```tsx [button.tsx]
export const Button = () => {
  return (
    <div className="button">Кликни!</div>
  );
}
```

По нажатию на эту кнопку, мы хотим чтобы в консоль выводилось "клик!". Для этого нам нужно использовать атрибут
`onClick`, в который мы напрямую передадим коллбэк, который будет выполняться каждый раз при клике:

```tsx [button.tsx]
export const Button = () => {
  
  const handleClick = () => console.log('Клик!');
  
  return (
    <div onClick={handleClick} className="button">Кликни!</div>
  );
}
```

::ContentDetails
---
title: Подробнее о передаче коллбэка
---
В JavaScript если мы инициализируем функцию и инициализируем переменную со значением этой функции - переменная будет
содержать ссылку на эту функцию:
```ts
const sayHi = () => console.log('hi!');
const sayHiCopy = sayHi; // Function sayHi
```

В примере выше мы можем использовать `sayHi` и `sayHiCopy` для того чтобы выполнить одну и ту же функцию,
так как по сути две переменные по сути указывают на одну и ту же функцию.

Если же мы вызовем функцию при инициализации другой переменной, то переменная будет содержать выходые данные от
вызванной функции:

```ts
const sayHi = () => console.log('hi!');
const sayHiCopy = sayHi(); // undefined
```

---

То же самое происходит и с передачей пропсов:

```tsx
const NormalButton = () => {
  const handleClick = () => console.log('It will run on click');
  
  return (
    <div onClick={handleClick}>Правильный обработчик действия</div>
  )
}

const ErrorButton = () => {
  const handleClick = () => console.log('It will run on component mount');
  
  return (
    <div onClick={handleClick()}>Неправильный обработчик действия</div>
  )
}
```

---
Если же мы хотим вызвать функцию c какими-либо аргументами - нам необходимо обернуть ее в еще одну функцию:

```tsx
const Button = (name: string) => {
  return (
    <div onClick={() => alert(`Hello, ${name}`)}>Say hi to {name}</div>
  )
}
```
::

## Передача событий в пропсах

Мы можем передавать события `onClick`, `onInput`, `onFocus`, ..., как пропсы. Это нужно для того чтобы явно указать в
дочернем компоненте какой элемент будет обрабатывать наше событие.

Внизу приведен пример из двух компонентов: `Button` и `Form`:

```tsx
const Button = ({onClick, children}) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};

const Form = () => {
  const onFirstButtonClick = () => console.log('The first button clicked!');
  const onSecondButtonClick = () => console.log('The second button clicked!');
  return (
    <form>
      <Button onClick={onFirstButtonClick}>The first button</Button>
      <Button onClick={onSecondButtonClick}>The second button</Button>
    </form>
  );
}
```