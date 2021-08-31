/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Dropdown = (props) => {

    const navbarItems = props.arr.map(i => <a class="navbar-item">{i}</a>)

    return (
        <div class="navbar-dropdown">
            <a class="navbar-item">{props.first}</a>
            <hr class="navbar-divider" />
            {navbarItems}
        </div>
    );
}

export default Dropdown;