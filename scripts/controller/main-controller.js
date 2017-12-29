'use strict';

angular.module('ngHighChartApp')
.controller('MainController', function($scope){
	
	var self = this;
	
	self.companyList = [
	    {
	      id:1,
	      companyName: 'Infosys',
	      target: 29.9,
	      status: 'approved'
	    },
	    {
	      id:2,
	      companyName: 'Capegemini',
	      target: 71.5,
	      status: 'researching'
	    },
	    {
	      id:3,
	      companyName: 'Accenture',
	      target: 106.4,
	      status: 'declined'
	    },
	    {
	      id:4,
	      companyName: 'E & Y',
	      target: 129.2,
	      status: 'pending'
	    },
	    {
	      id:5,
	      companyName: 'Sapient',
	      target: 144,
	      status: 'approval'
	    }
	  ];
	  
  self.statusList = [{id:1,name:'researching'}, 
  {id:2,name:'pending'},
  {id:3,name:'approval'}, 
  {id:4,name:'approved'},
  {id:5,name:'declined'}];

  self.addRow = function(){
  	self.showEdit = false;
	self.createRow = true;
  };

  self.editRow = function(index){
  	self.showEdit = true;
  	self.createRow = false;
  	self.sequence = index;
  };

  self.updateRow = function(data,index){
  	if(self.showEdit){
  		for(var i = 0;self.companyList.length>i;i++){
	        if(i === index){
	          self.companyList[i] = data;
	        }
  		}
  	self.showEdit = false;
  	} else if(self.createRow){
  	  self.companyList.push({companyName: self.companyName,
      target: self.targetAmount,
      status: self.status.name});
      self.createRow = false;
  	} 	

  };
  self.deleteRow = function(index){
  	self.companyList.splice(index,1)
  };

  Highcharts.chart('InorganicChart', {
      title: {
        text: 'Inorganic Data Chart'
      },

      xAxis: {
        categories: ['Infosys', 'Capegemini', 'Accenture', 'E & Y', 'Sapient']
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0]
      }]
    });
	
});

