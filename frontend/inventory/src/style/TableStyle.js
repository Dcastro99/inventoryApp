export const TableStyle = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10
  },
  tableQty: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    marginRight: 2,
    marginTop: 1
  },
  deleteButton: {
    // border: '1px solid Tomato',
    // backgroundColor: '#B8B8B8',
    backgroundColor: 'WhiteSmoke',
    color: 'Tomato',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'white',
      color: 'Tomato',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
  }, emptyPantry: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'LightSlateGray',
    color: 'white',
    fontSize: 30,
    marginTop: 5,
    width: 400,
    height: 200,
    borderRadius: 2
  }
}