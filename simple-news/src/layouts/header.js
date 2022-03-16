import React from 'react'

function Header() {
    return (
        <div style={style} className='bg-gradient-to-b from-blue-300 via-teal-600 to-slate-700 text-white'>
            Simple News
        </div>
    )
}

const style = {
    height: 120,
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 300,
    fontSize: 40
}

export default Header
