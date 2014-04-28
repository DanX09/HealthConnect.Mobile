define(
    ['jQuery', 'kendo'],
    function($, kendo){
	
		function dateTime() {
			if (arguments.length == 0) {
				this.date = new Date();
			}
			else {
				try {
					if (arguments.length == 1 && (typeof arguments[0]  == "string" || typeof arguments[0]  == "number")) {
						this.date = new Date(arguments[0]);
					}
					else if (arguments.length > 1) {
						switch(arguments.length) {
							case 2:
								this.date = new Date(arguments[0], arguments[1]);
								break;
							case 3:
								this.date = new Date(arguments[0], arguments[1], arguments[2]);
								break;
							case 4:
								this.date = new Date(arguments[0], arguments[1], arguments[2], arguments[3]);
								break;
							case 5:
								this.date = new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
								break;
							case 6:
								this.date = new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
								break;
							case 7:
								this.date = new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
								break;
							default:
								this.date = new Date();
								break;
						};
					}
					else {
						this.date = new Date();
					};
				}
				catch (ex) { 
					console.log("ERROR: Createing DateTime Object: \r\n", ex);
					this.date = new Date();
				};
			};
			if (this.date == "Invalid Date") this.date = new Date();
    
			this.getDaySuffix = function(a) {
				var b = "" + a,
					c = b.length,
					d = parseInt(b.substring(c-2, c-1)),
					e = parseInt(b.substring(c-1));
				if (c == 2 && d == 1) return "th";
				switch(e) {
					case 1:
						return "st";
						break;
					case 2:
						return "nd";
						break;
					case 3:
						return "rd";
						break;
					default:
						return "th";
						break;
				};
			};
    
			this.getDoY = function(a) {
				var b = new Date(a.getFullYear(),0,1);
				return Math.ceil((a - b) / 86400000);
			}
    
			this.weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
			this.months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
			this.daySuf = new Array( "st", "nd", "rd", "th" );
   
			this.day = {
				index: {
					week: "0" + this.date.getDay(),
					month: (this.date.getDate() < 10) ? "0" + this.date.getDate() : this.date.getDate()
				},
				name: this.weekdays[this.date.getDay()],
				of: {
					week: ((this.date.getDay() < 10) ? "0" + this.date.getDay() : this.date.getDay()) + this.getDaySuffix(this.date.getDay()),
					month: ((this.date.getDate() < 10) ? "0" + this.date.getDate() : this.date.getDate()) + this.getDaySuffix(this.date.getDate())
				}
			}
   
			this.month = {
				index: (this.date.getMonth() + 1) < 10 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1,
				name: this.months[this.date.getMonth()]
			};
   
			this.year = this.date.getFullYear();
   
			this.time = {
				hour: {
					meridiem: (this.date.getHours() > 12) ? (this.date.getHours() - 12) < 10 ? "0" + (this.date.getHours() - 12) : this.date.getHours() - 12 : (this.date.getHours() < 10) ? "0" + this.date.getHours() : this.date.getHours(),
					military: (this.date.getHours() < 10) ? "0" + this.date.getHours() : this.date.getHours(),
					noLeadZero: {
						meridiem: (this.date.getHours() > 12) ? this.date.getHours() - 12 : this.date.getHours(),
						military: this.date.getHours()
					}
				},
				minute: (this.date.getMinutes() < 10) ? "0" + this.date.getMinutes() : this.date.getMinutes(),
				seconds: (this.date.getSeconds() < 10) ? "0" + this.date.getSeconds() : this.date.getSeconds(),
				milliseconds: (this.date.getMilliseconds() < 100) ? (this.date.getMilliseconds() < 10) ? "00" + this.date.getMilliseconds() : "0" + this.date.getMilliseconds() : this.date.getMilliseconds(),
				meridiem: (this.date.getHours() > 12) ? "PM" : "AM"
			};
    
			this.sym = {
				d: {
					d: this.date.getDate(),
					dd: (this.date.getDate() < 10) ? "0" + this.date.getDate() : this.date.getDate(),
					ddd: this.weekdays[this.date.getDay()] ? this.weekdays[this.date.getDay()].substring(0, 3) : null,
					dddd: this.weekdays[this.date.getDay()],
					ddddd: ((this.date.getDate() < 10) ? "0" + this.date.getDate() : this.date.getDate()) + this.getDaySuffix(this.date.getDate()),
					m: this.date.getMonth() + 1,
					mm: (this.date.getMonth() + 1) < 10 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1,
					mmm: this.months[this.date.getMonth()] ? this.months[this.date.getMonth()].substring(0, 3) : null,
					mmmm: this.months[this.date.getMonth()],
					yy: (""+this.date.getFullYear()).substr(2, 2),
					yyyy: this.date.getFullYear()
				},
				t: {
					h: (this.date.getHours() > 12) ? this.date.getHours() - 12 : this.date.getHours(),
					hh: (this.date.getHours() > 12) ? (this.date.getHours() - 12) < 10 ? "0" + (this.date.getHours() - 12) : this.date.getHours() - 12 : (this.date.getHours() < 10) ? "0" + this.date.getHours() : this.date.getHours(),
					hhh: this.date.getHours(),
					m: this.date.getMinutes(),
					mm: (this.date.getMinutes() < 10) ? "0" + this.date.getMinutes() : this.date.getMinutes(),
					s: this.date.getSeconds(),
					ss: (this.date.getSeconds() < 10) ? "0" + this.date.getSeconds() : this.date.getSeconds(),
					ms: this.date.getMilliseconds(),
					mss: Math.round(this.date.getMilliseconds()/10) < 10 ? "0" + Math.round(this.date.getMilliseconds()/10) : Math.round(this.date.getMilliseconds()/10),
					msss: (this.date.getMilliseconds() < 100) ? (this.date.getMilliseconds() < 10) ? "00" + this.date.getMilliseconds() : "0" + this.date.getMilliseconds() : this.date.getMilliseconds()
				}
			};
		};
		
		var dateHelper = {
			dateTime: dateTime
			
		return dateHelper;
	}
);