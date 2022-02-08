import React from "react";
import "./style.css";

class App extends React.Component {
  cycle =(e)=>{
    document.getElementById('d1').src="https://i.pinimg.com/originals/c5/6e/be/c56ebed6c368d900b30bded63548280e.gif";
   }
 
  bike =(e)=>{
    document.getElementById('d1').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF9Lck-Pn89YLJmn7M-JbEb3GcQraD_gIPw&usqp=CAU";
   }
   auto =(e)=>{
    document.getElementById('d1').src="https://cdn.dribbble.com/users/695124/screenshots/3754806/media/578f8de12fa8664b9df39b8fa577c94b.png?compress=1&resize=400x300";
   }
   minicar =(e)=>{
    document.getElementById('d1').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOUHrEhXYjLacfMk-JV175IQgt_Ej4X-_hg&usqp=CAU";
   }
   carsuv =(e)=>{
    document.getElementById('d1').src="https://media.istockphoto.com/vectors/red-car-with-trunk-on-roof-on-white-background-vector-id1137278712?k=20&m=1137278712&s=612x612&w=0&h=cuLyez4Fuiy8xVwXDhtFCFPhuNq8AMHvslsB-wceDSs=";
   }
    carxuv =(e)=>{
    document.getElementById('d1').src="https://media1.thehungryjpeg.com/thumbs2/ori_3461638_41e388d9ba60434efda5674174de3a6479cd07fa_retro-travel-red-van-icon-vector-illustration-in-flat-design.jpg";
   }
  render(){
  return (
    <div className="betterview">
        <div className="imgdiv">
          <img src="https://i.pinimg.com/originals/c5/6e/be/c56ebed6c368d900b30bded63548280e.gif"
            alt="cycle" id="d1" />
        </div>

        <div className='btndiv'>
        <button onClick={this.cycle}>1</button>
        <button onClick={this.bike}>2</button>
        <button onClick={this.auto}>3</button>
        <button onClick={this.minicar}>4</button>
        <button onClick={this.carsuv}>5</button>
        <button onClick={this.carxuv}>6</button>
        </div>
        <div className="submit">
        <input type="button" value="CONFIRM SEATS"/>
        </div>
    </div>
  );
  }
}
export default  App;
