
export const ProductStyle = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  paper: {
    padding: '30px 20px',
    width: 300,
    margin: '20px auto'
  },
  formtext: {
    margin: '10px 0'
  },
  textFiled: {
    margin: '0 0 20px'
  },
  numberTextFiled: {
    margin: '0 0 20px',
    width: '100px',
    // backgroundColor: 'pink'
  },
  addIcon: {
    fontSize: 40
  },
  button: {
    backgroundColor: '#676767',
    color: 'WhiteSmoke',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'white',
      color: '#676767',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
  }
}
