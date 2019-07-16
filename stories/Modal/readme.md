<a name="modal"></a>

## Modal

Modal

**Modal**: Uso de las **Props**

| Name  | Type                | Description |
| ----- | ------------------- | ----------- |
| title | <code>string</code> | Titulo      |

y demas estados con hooks

**Ejemplo Wrapper**

```javascript
<ReactModal>
  <ContentWrapper />
</ReactModal>
```

**Ejemplo consumer con props**

```javascript
const ReactModal = ({ children, position }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onClose = () => setModalIsOpen(false);

  return (
    <React.Fragment>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onClose={onClose} title="Example Modal">
        {children}
      </Modal>
    </React.Fragment>
  );
};
```
