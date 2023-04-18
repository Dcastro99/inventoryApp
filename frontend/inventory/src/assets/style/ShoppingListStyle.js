export const ShoppingListStyle = {
  modalButtun: {
    // marginRight: 2,
    backgroundColor: 'white',
    color: '#626D75',
    borderRadius: 25,
    height: 62,
    // padding: 2.5,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'WhiteSmoke',
      color: 'black',
    }
  },
  Appbar: {
    position: 'relative',
    backgroundColor: 'gray',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '20px 20px 20px 20px',
  },
  closeModalButton:
  {
    color: 'White',
    borderRadius: 25,
    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      color: 'red',
    }
  }
  ,
  mainListBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: 2,
    borderRadius: 2,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 20
  },
  deleteItemButton: {
    backgroundColor: 'white',
    color: '#FF7F50',
    borderRadius: '10px',
    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'smokeWhite',
      color: 'red',
    },
    margin: 1
  },
  currentQtyBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 175,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: 4,
    borderRadius: 2,
    marginLeft: 5

  },
  emptyCartBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  emptyCartText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '140px',
    maxWidth: 360,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'whitesmoke'
  },
  emptyCartContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    width: 800,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
  },
  completedCartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 1,
    width: '80%'
  },
  completedCartBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: 2,
    borderRadius: 2
  },
  completedCartFont: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },
  undoButton: {
    backgroundColor: 'WhiteSmoke',
    color: '#626D75',
    borderRadius: '10px',
    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'lightGray',
      color: '#FF7F50',
    },

  },
  undoButtonFont: {
    fontWeight: 'bold', fontSize: 20,
  },
  completedCartMainBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10
  },
  completeProductName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  CompletedCurrentQtyBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 175,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: 3.1,
    borderRadius: 2,
    marginLeft: 5
  },
  clearAllBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearAllButton: {
    backgroundColor: 'white',
    color: '#FF7F50',
    borderRadius: '10px',
    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    }, marginTop: 10,
    maxWidth: 360,
  }
}