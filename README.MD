# React-Modal

[![Financial Contributors on Open Collective](https://opencollective.com/react-modal/all/badge.svg?label=financial+contributors)](https://opencollective.com/react-modal) 
![npm](https://img.shields.io/npm/dm/@wargas/react-modal?label=%E2%8F%ACdownloads&style=for-the-badge)
![npm](https://img.shields.io/npm/v/@wargas/react-modal.svg?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@wargas/react-modal?label=%F0%9F%93%9Clicense&style=for-the-badge)


🎉 React-Modal allows you to add modals to your app with ease. No more nonsense!

## Installation

```
$ npm install --save @wargas/react-modal
$ yarn add @wargas/react-modal
```


## Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Swipe to close 👌
- Can choose swipe position
- Can display a react component inside the modal!
- Can remove a modal programmatically
- Define behavior per toast
- And much more !

## The gist

```jsx
  import React from 'react';
  import FirstModal from './FirstModal'

  import { ContainerModal, modal } from '@wargas/react-modal';
  import '@wargas/react-modal/dist/index.css';
  
  function App(){
    const open = () => modal(FirstModal, {title: 'My Title', size: 'sm', position:'center'});

    return (
      <div>
        <button onClick={open}>Open Modal!</button>
        <ContainerModal />
      </div>
    );
  }
```

```jsx
  export function FirstModal() {
  const {
    close,
    setTitle,
    setSize,
    setPosition,
    options: { data, title },
  } = useModal();

  return (
    <div className="p-5">
        ...
    </div>
  );
}
```

The `modal` function returns a promise with the data passed in the close function within the `modal`, which can be used later by the caller.

```tsx
async function handleOpenAnyModal() {
  const result = await modal(AnyModal, {data: {}, title: 'Title'})
  if(result) {
    ...//do any with result
  }
}
//OR
async function handleOpenAnyModal() {
  modal(AnyModal, {data: {}, title: 'Title'}).then(result => {
    if(result) {
      ...//do any with result
    }
  })
}
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.


## License

Licensed under MIT
