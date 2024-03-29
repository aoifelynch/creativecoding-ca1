class HorizontalBarChart {
    constructor(obj) {
      this.data = obj.data;
      this.chartWidth = obj.chartWidth;
      this.chartHeight = obj.chartHeight;
      this.xPos = obj.xPos;
      this.yPos = obj.yPos;
      this.axisLineColour = obj.axisLineColour;
      this.barWidth = obj.barWidth;
      this.labelTextSize = obj.labelTextSize;
      this.labelPadding = obj.labelPadding;
      this.labelColour = obj.labelColour;
      this.labelRotation = obj.labelRotation;
      this.barWidth = obj.barWidth;
      this.yValue = obj.xValue;
      this.xValue = obj.yValue;
      this.chartName = obj.chartName;
      this.xLabel = obj.yLabel;
      this.yLabel = obj.xLabel;
      this.xyLabelRotation = obj.xyLabelRotation;
      this.labelStroke = obj.labelStroke;
    }
  
    render() {
      push();
      translate(this.xPos, this.yPos);
      stroke(this.axisLineColour);
      line(0,0,this.chartWidth,0);
      line(0,0,0,-this.chartHeight);
  
      let gap = (this.chartHeight - this.data.length * this.barWidth) / (this.data.length + 1);
      let labels = this.data.map((d) => d[this.yValue]);
      let scale = this.chartWidth / max(this.data.map((d) => d[this.xValue]));
      // 
  
      //This draws the horizontal elements, bars and labels
      push();
      translate(0,-gap);


      textSize(20);
      text(this.chartName, 30, -310);
      noStroke();
      textSize(this.labelTextSize)
      stroke(255);
      strokeWeight(this.labelStroke);
      text(this.xLabel, 100, 90);
      for (let i = 0; i < this.data.length; i++) {
        //Draws rectangle bars
        stroke(255);
        fill("#cc9a97");
  
        rect(0,0, this.data[i][this.xValue] * scale, -this.barWidth);
  
        //Draws labels
        textSize(this.labelTextSize);
        noStroke();
        fill(this.labelColour);
        textAlign(RIGHT, CENTER);
  
        push();
        translate(-this.labelPadding, -this.barWidth / 2);
        // rotate(this.labelRotation);
        text(labels[i], 0, 0);
        pop();
  
        translate(0, -gap - this.barWidth);
      }
      pop();
  
      //This draws the horizontal elements
      let tickGap = this.chartWidth / 5;
      let tickValue = max(this.data.map((d) => d[this.xValue])) / 5;
  
      for (let i = 0; i <= 5; i++) {
        stroke(255);
        line(i * tickGap, 0, i * tickGap, 20);
        textSize(this.labelTextSize);
        noStroke();
        fill(this.labelColour);
        textAlign(CENTER, BOTTOM);
        text(round(tickValue * i), i * tickGap, 40);
      }
  
      rotate(this.xyLabelRotation);
      textSize(this.labelTextSize);
      stroke(255);
      strokeWeight(this.labelStroke);
      text(this.yLabel, -150, 170);
      pop();
    }
  }
  