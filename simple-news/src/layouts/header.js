import React from 'react'

function Header() {
    return (
        <div style={style}>
            Simple News
        </div>
    )
}

const style = {
    backgroundColor: 'black',
    color: 'white',
    height: 120,
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 200
}

export default Header
