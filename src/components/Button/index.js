import React from "react";
import { Link } from 'react-router-dom'

import { Button as Botao} from './style'

function Button({...props}) {


    return <Botao {...props}>

    </Botao>
}

export default Button