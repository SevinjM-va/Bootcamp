

class Video {
  constructor(title, uploader, time){
    this.title = title;
    this.uploader = uploader;
    this.time =  time;
  }
  watch() {
    return `${this.uploader} parameter watched all ${this.time} parameter of ${this.title} parameter!`
  }
}

const videos = [
  {
  title: "Harry Potter",
  uploader: "John",
  time: '20'
  },
  {
    title: "Killer",
    uploader: "Tom",
    time: '30'
  },
  {
    title: "Kidecats",
    uploader: "Mary",
    time: '15'
  },
  {
    title: "Murder",
    uploader: "Violet",
    time: '45'
  },
  {
    title: "Peppa pig",
    uploader: "Lala",
    time: '25'
  }  
];
let title;
let uploader;
let time;



let x = videos.map((el)=>{
  title = el.title;
  uploader = el.uploader;
  time = el.time;
  return new Video(time,uploader,time);
})

x.forEach((el)=>{
console.log(el.watch());
});



