
export const OptionStyle = {
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

  mainButton: {
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
  }
}
