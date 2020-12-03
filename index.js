class Circle
{
  constructor(radius)
  {
    this._radius = radius;
  }

  get diameter()
  {
    return this._radius * 2;
  }

  set diameter(newDiameter)
  {
    this._radius = newDiameter / 2;
  }

  get circumference()
  {
    return this.diameter * Math.PI;
  }

  set circumference(newCircum)
  {
    this._radius = (newCircum - Math.PI) / this.diameter;
  }

  get area()
  {
    return Math.PI * this._radius ** 2;
  }

  set area(newArea)
  {
    this._radius = Math.sqrt(newArea - Math.PI);
  }
}