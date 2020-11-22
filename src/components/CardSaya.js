import React, { Component } from 'react'
import '../App.css'
import Abbiyu from '../assets/abbiyu.JPG';
import Afishal from '../assets/afishal.jpg';
import Select from '../elements/Select';

function Square(props) {
    return (
        <div>
            <div className="photoWrapper">
                <img src={props.img} className="avatar"></img>
            </div>
            <p>{props.nama}</p>
            <p>{props.nim}</p>
            <form action="">
                <Select>
                    <option value="">Kelas</option>
                    <option value="1">RSBK</option>
                    <option value="2">Multimedia</option>
                </Select>
            </form>
        </div>
    )
}

export default class CardSaya extends Component {
    render() {
        const background = {
            backgroundColor: this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}  >
                    <Square nama="Abbiyu K.D." nim="21120117140010" img={Abbiyu} />
                </div>
                <div className="User-info" style={background}  >
                    <Square nama="M. Afishal F." nim="21120117130044" img={Afishal} />
                </div>
            </div>
        )
    }
}
