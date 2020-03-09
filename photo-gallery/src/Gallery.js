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
      '',
      '',
      'https://instagram.fewr1-6.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/65077267_475165256604878_5769211708587398686_n.jpg?_nc_ht=instagram.fewr1-6.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5ZZWw5AowUQAX9iOlZi&oh=54fe925e1246ecdffba89b9f2df32859&oe=5E8E8CA0',
      'https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-15/e35/20987309_2192050391021273_2599801574658146304_n.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&_nc_cat=105&_nc_ohc=azcYYyZ0YqYAX9W4OkT&oh=5530432264a0be7ae7eebcd866e3f8a2&oe=5E8AD3B1',
      'https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-15/e35/37963401_231297444257464_4990729805855981568_n.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RqA-SHznoNgAX8sMzyt&oh=393d406e1e483c5a2a295773dc0abc87&oe=5E8C4C13',
      'https://instagram.fewr1-3.fna.fbcdn.net/v/t51.2885-15/e35/19436377_143572796207854_7419432476285599744_n.jpg?_nc_ht=instagram.fewr1-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=GUHZMilzfHwAX9ZJx09&oh=4c5468da3667cf0ba47b9f74af9d9c6b&oe=5E8B115E',
      'https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-15/e35/81531392_897451230715398_5710741162371035909_n.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&_nc_cat=106&_nc_ohc=jQKVyCQcs9MAX9iaOv-&oh=f96e5b094ede1d132bd520a4c5ff6987&oe=5E8800A8',
      '219los',
      '',
      '',
      '',
      'https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-0/p640x640/88253743_2592327247649031_5693577800569585664_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_oc=AQngskZcFxfsgCJ1PrVEY2Rx35W0nZMrEga_IiQBrXm_Gvr90nQONhET8NUsTnsdR3M&_nc_ht=scontent.fewr1-3.fna&_nc_tp=6&oh=03b629783a622c62c69f5f750d5af695&oe=5E8D1674',
      'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/87349118_2592319204316502_4050833263176974336_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_oc=AQnqlZsZcx_Mg1ofz2H6VJGD_eJqdFLovb6oHtDKrolchz2x1k8Z5rLe_zC5lZGpt9E&_nc_ht=scontent.fewr1-6.fna&oh=823deec1d165c859d7b39a00dcf60809&oe=5E92F92B',
      'https://scontent.fewr1-1.fna.fbcdn.net/v/t1.0-0/p640x640/88206526_2592314254316997_138305342864883712_o.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_oc=AQnf0id1J9dGMBiVKBiEjAb212I5blRPLp5dL8N4Yg3YZ-aAt4u4B03zge1Ai8iu_IM&_nc_ht=scontent.fewr1-1.fna&_nc_tp=6&oh=7d44e296762eb5820be6ac179e6c31ad&oe=5EA6CFE0',
      'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/87463928_2592311650983924_6394704703103434752_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_oc=AQlrqpA_vmVg9lWBCNL0BGMVUn8jpK94b2JHarnGhfBu89sBv9gNWj3IguvtmdBW2o8&_nc_ht=scontent.fewr1-6.fna&oh=6be5b27ab892b5180a2e29cc6d0ff6b3&oe=5E942830',
      'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/87370937_2592299814318441_7120862254131576832_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_oc=AQlylUWAiMcoJBxQ79Hez5BvwXtZZt2wmCrxlOqRlh0jdcZVUQmCPMPqvIcnfy0uRDA&_nc_ht=scontent.fewr1-6.fna&oh=1a4c9c59c1cfada38c4fdd065b5a2158&oe=5E9761BD',
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/87159966_2580856668796089_9029584332229967872_o.jpg?_nc_cat=100&_nc_sid=a61e81&_nc_oc=AQkvbiFsj4y-_wjDTYtsIPQLoki873KiL38rWGyUW1wir4hW-kzjx4uTi_SKzBSOfdA&_nc_ht=scontent-lga3-1.xx&oh=c4313892108e9ffac4557bbc6180f937&oe=5EB7237E',
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p640x640/85102041_2580851522129937_5396168817313316864_o.jpg?_nc_cat=108&_nc_sid=a61e81&_nc_oc=AQklUrgZCCtgYYbGGyH3s1D5zt-2MD20nopd9QOLjsFSvLuw3bvbyXVcsUnGjWg9e9M&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=1f944ff3fcb1d4c85bd1bacba5b5c1d1&oe=5EFF18D5',
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/87048850_2580861668795589_1122003104489799680_o.jpg?_nc_cat=107&_nc_sid=a61e81&_nc_oc=AQltsVag-QtHariIVPicMVAmqlP3asytvMeuhRV7HMBMYe-eRpFglB0p9C2PcL_OLmg&_nc_ht=scontent-lga3-1.xx&oh=ab0d70e00cdb818eb404d16b81cd3f5c&oe=5EFF1080',
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/87163276_2580865748795181_489482128346578944_o.jpg?_nc_cat=109&_nc_sid=a61e81&_nc_oc=AQlVxa4yzTCf8Pa8qVw3cpGVGJro8kQ978r115BYimPd4CLp98X6ZmgiJTTHw1RKhqY&_nc_ht=scontent-lga3-1.xx&oh=203e0f4824ad55edcb1c42d56c908ee0&oe=5EBF9B8D',
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
