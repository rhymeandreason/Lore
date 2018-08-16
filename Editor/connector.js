class Connector {
  constructor(start, end) {
    this.start = start;
    this.end = end;

    this.drawCurve();

  }

  drawCurve(){
    //console.log("drawing curve");
    var pos1 = this.start.offset();
    var pos2 = this.end.offset();
    var d1 = 12*scale;
    var d2 = 10*scale; //size of the element
    var x1 = pos1.left+3;
    var y1 = pos1.top+d1;
    var x2 = pos2.left+d2;
    var y2 = pos2.top+d2;

    if (this.curve){
      this.curve.clear();
    }
    this.curve = draw.path().M({x: x1-dx, y: y1-dy}).C({x: x1+50-dx, y: y1-dy}, {x: x2-50-dx, y: y2-dy}, {x: x2-dx, y: y2-dy});
    this.curve.stroke({ color: 'silver', width: 3, linecap: 'round' });
    this.curve.attr('fill', 'none');
  }

  removeCurve(){
    this.curve.clear();
  }

}
