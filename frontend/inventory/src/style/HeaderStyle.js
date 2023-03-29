export const HeaderStyle = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 110
  },
  titleBox: {
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110
  },
  mainTitle: {
    marginLeft: 15,
    fontFamily: 'Dancing Script',
    fontSize: 70
  },
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4
  },
  buttonContainer: {
    backgroundColor: 'white',
    color: '#626D75',
    borderRadius: '10px',
    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    }

  }
}