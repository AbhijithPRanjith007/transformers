import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './Navbar';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
            <NavLink to='/Home'activeStyle>
			TRANSFORMERS
		</NavLink>
	
        <NavBtn>
		<NavBtnLink to='/SignUp' activeStyle>SignUp</NavBtnLink>
		</NavBtn>
		<NavBtn>
		<NavBtnLink to='/Login' activeStyle>Login</NavBtnLink>
		</NavBtn>
        	</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
