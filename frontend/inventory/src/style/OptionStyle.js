
export const OptionStyle = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',

  },
  paper: {
    padding: '30px 20px',
    width: 300,
    margin: '20px auto',
    borderRadius: 50,
    // backgroundColor: 'pink'
  },
  boxWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  mainButton: {
    // border: '1px solid Tomato',
    backgroundColor: 'WhiteSmoke',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    color: 'black',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#B8B8B8',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
  },
  buttons: {
    backgroundColor: '#B8B8B8',
    color: 'Tomato',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'white',
      color: 'Tomato',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
    margin: 1
  },
  cartButton: {
    backgroundColor: 'white',
    color: '#626D75',
    borderRadius: '10px',
    // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      // boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',

      backgroundColor: 'white',
      color: 'black',
    },
    margin: 1
  }
}
