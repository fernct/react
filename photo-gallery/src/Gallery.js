import React, { Component } from "react";

function ImageTD(props) {
    return (
      <td class="gallery">
        <a href={props.imgName}>
          <img src={props.imgName} width="300" height="300"/>
        </a>
      </td>
    );
}

class Gallery extends Component {

  state = {
    photosList: [
      'https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-0/p640x640/86457742_2577829585765464_8959741528272535552_o.jpg?_nc_cat=110&_nc_sid=a61e81&_nc_ohc=1LfSwpK9BIcAX8ikiAS&_nc_ht=scontent.fewr1-3.fna&_nc_tp=6&oh=271b12298c18633a7cc4613f734e2e9e&oe=5EF7940E',
      'https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-0/p640x640/86463168_2577846455763777_5030311575915855872_o.jpg?_nc_cat=111&_nc_sid=a61e81&_nc_ohc=tM47H9UFQ3EAX-SgQhw&_nc_ht=scontent.fewr1-2.fna&_nc_tp=6&oh=ba04d359accce65b4c6e5cc33e3e906a&oe=5EFDD18D',
      'https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-0/p640x640/86393272_2577846302430459_4988037286563151872_o.jpg?_nc_cat=111&_nc_sid=a61e81&_nc_ohc=SJxaQi_RLUsAX9-MtZn&_nc_ht=scontent.fewr1-2.fna&_nc_tp=6&oh=1f66586185d3803c933b7b6ce0b9b240&oe=5EBBDBAB',
      'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/84293553_2571734206375002_7466854644719812608_o.jpg?_nc_cat=101&_nc_sid=a61e81&_nc_ohc=pg4ry4-q1k4AX8J7gJA&_nc_ht=scontent.fewr1-6.fna&oh=018f745a4c46b814889d6756398bc22c&oe=5EBBB09F',
      'https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-0/p640x640/83823914_2567433660138390_2610666660801019904_o.jpg?_nc_cat=104&_nc_sid=a61e81&_nc_ohc=RZdBWkkhyAwAX9L5MVF&_nc_ht=scontent.fewr1-5.fna&_nc_tp=6&oh=e647ef74d67c3d2a45d2e98a6a68b2ff&oe=5F010FCF',
      'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/83493076_2563640220517734_2771180953136005120_o.jpg?_nc_cat=101&_nc_sid=a61e81&_nc_ohc=-ZkwBx36uF4AX9nmzgK&_nc_ht=scontent.fewr1-6.fna&oh=ac70b6e85a8fe74ca7160204e77e5a60&oe=5EBF60AC',
      'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-0/p640x640/84014371_2563641093850980_1094561385909583872_o.jpg?_nc_cat=106&_nc_sid=a61e81&_nc_ohc=potY7OS28bcAX-JbqTE&_nc_ht=scontent.fewr1-6.fna&_nc_tp=6&oh=42fc8d7f9a81c532cbaf27dbd3434d36&oe=5EF4EA1A',
      'https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-0/p640x640/84451563_2563645057183917_6007306899341443072_o.jpg?_nc_cat=110&_nc_sid=a61e81&_nc_ohc=TZBM_e1Cnk8AX86eVnt&_nc_ht=scontent.fewr1-3.fna&_nc_tp=6&oh=c0d5d96f9e586faf18cfd6aecfa67c32&oe=5EC0FF7B',
      'https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-9/83175961_2560508077497615_5624418166995156992_o.jpg?_nc_cat=111&_nc_sid=a61e81&_nc_ohc=P33BDSM4hv0AX9L6_0X&_nc_ht=scontent.fewr1-2.fna&oh=4557d32c13775154f4d371436d27f655&oe=5F00A062',
      'https://scontent.fewr1-1.fna.fbcdn.net/v/t1.0-0/p640x640/82717425_2552994884915601_2516106582048112640_o.jpg?_nc_cat=108&_nc_sid=a61e81&_nc_ohc=RX7IIQrb1wMAX-ZIEof&_nc_ht=scontent.fewr1-1.fna&_nc_tp=6&oh=bd33e36ff0225d58caee6448a1c244dc&oe=5EBF408D',
      '',
      '120sos'
    ]
  };

  render() {
    const ROW_SIZE = 4;
    let trArr = [];
    let tdArr=[];
    for (var i = 0; i < this.state.photosList.length; i++) {
      tdArr.push(<ImageTD imgName={this.state.photosList[i]}/>);
      if ((i + 1) % ROW_SIZE === 0 || i === this.state.photosList.length-1) {
        trArr.push(<tr>{tdArr}></tr>);
        tdArr = [];
      }
    }

    return (
      <React.Fragment>
        <table>
          {trArr}
        </table>
      </React.Fragment>
    );
  }
}

export default Gallery;
