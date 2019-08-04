export default {
  '': {
    boxSizing: 'border-box',
    height: 27,
    border: '1px solid black',
    position: 'relative',
    paddingLeft: 7,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 31,
    marginBottom: 9,
    marginRight: 9,
    fontSize: 16,
  },

  name: {
    cursor: 'pointer'
  },

  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 21,
    cursor: 'pointer',
    borderLeft: '1px solid black',
    background: 'rgba(255, 79, 43, 0.85)',
  },

  'removeButton:hover': {
    background: 'rgb(255, 79, 43)'
  },

  'removeButton::before, removeButton::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 13,
    height: 2,
    top: 11,
    left: 4,
    cursor: 'pointer',
  },

  'removeButton::before': {
    transform: 'rotate(45deg)',
  },

  'removeButton::after': {
    transform: 'rotate(-45deg)',
  },
};
