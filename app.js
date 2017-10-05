angular
  .module('todoMonitor', [])
  .controller('todoMonitorController', todoMonitorController);

function todoMonitorController() {
  this.tasks=['Pet the cat','Eat second breakfast','Watch Rocky cutscenes'];
  this.createTask = () => {
    this.tasks.push(this.taskName);
    this.taskName='';
  };

  this.deleteTask = (index) => {
    this.tasks.splice(index,1);
  }
}
