var Imap = require('imap'),
    inspect = require('util').inspect;
	config = require("./config.json");
	trim  = require("trim");
	nodemailer = require('nodemailer');
	stringLength = require('string-length');
	casting = require('casting');
	mailparser = require("mailparser");
	
var init = function(){
	var server  = new Imap({
		"user": config["imap_cinfig"]["username"],
		"password": config["imap_cinfig"]["password"],
		"host": config["imap_cinfig"]["host"],
		"port": config["imap_cinfig"]["port"],
		"tls": config["imap_cinfig"]["tls"],
		"connTimeout": config["imap_cinfig"]["connTimeout"],//100000,
		"authTimeout": config["imap_cinfig"]["authTimeout"],//50000,
		//"fetchUnreadOnStart": config["imap_cinfig"]["fetchUnreadOnStart"],//true,
		tlsOptions: {rejectUnauthorized: false},
		"markSeen": true,
		"fetchUnreadOnStart": true
	});
	
	exitOnErr = function(err) {
	 // console.log("asdasdas ad");
	  console.error(err);
	  return process.exit();
	};
	
	server.once('ready', function(err) {
		
		
			
		server.openBox("INBOX", false, function(err, box) {
			if (err) {
			  exitOnErr(err);
			}
			//console.log("You have " + box.messages.total + " messages in your INBOX");
			server.search(["UNSEEN", ["FROM", config["imap_cinfig"]["username"]]], function(err, results) {
				var fetch;
				if (err){
					exitOnErr(err);
				}
				if (!results.length) {
					console.log("No unread messages from "+ config["imap_cinfig"]["username"] );
					exitOnErr("No unread messages");
				}
				
			//	console.log("total un reade message--- "+results.length);
				
				fetch = server.fetch(results, {
				  //markSeen: true,	
				  bodies: 'HEADER.FIELDS (SUBJECT)',
				  struct: true
				});
				
				fetch.on('message', function(message, seqno) {
					var prefix = '(#' + seqno + ') ';
					//console.log(seqno);
					message.on('body', function(stream, info) {
						var buffer = '';
						stream.on('data', function(chunk) {
						buffer += chunk.toString('utf8');
						var mixed_subject  = chunk.toString('utf8');
						//console.log(mixed_subject);
			  			mixed_subject  =  mixed_subject.replace("Subject:","");
						subject = mixed_subject.replace(/(\r\n|\n|\r)/gm,"");
						//console.log(subject);
						var iccid = "";
					    var percentage = "";
					    subject_length  = stringLength(subject);
											
							config['mailOptions']["subject"] = subject;
							config['mailOptions']["text"]    = "Please note that you have reached "+percentage+ " of your data allowance for the iccid : "+iccid;   //mail['text']; 
							config['mailOptions']["text"] +=  "\n";
							config['mailOptions']["text"] +=  "\n";
							config['mailOptions']["text"] +=  "\n";
							config['mailOptions']["text"] +=  "Best Regards,";
							config['mailOptions']["text"] +=  "\n";
							config['mailOptions']["text"] +=  "Pareteum";
							//console.log(config['mailOptions']["subject"]);
							//send mail using smtp port
							var transporter = nodemailer.createTransport(config['smtp_auth']);
							transporter.sendMail(config['mailOptions'], function(error, info){
								if (error) {
									console.log(error);
								} else {
									console.log('Email sent: ' + info.response);
								}
								
							});
						
					
			  
			        });
						
						
					});
					
					message.on("data", function(data) {
					  return parser.write(data.toString());
					});
					return message.on("end", function() {
						server.end();
					  //return parser.end();
					});
					
				});
								
				
				
			});
		});
		

	});
	
	server.once('error', function(err) {
	  if (err) {
		exitOnErr(err);
		console.log("connection error");
	  }
	});

	/*
	server.once('end', function() {
	  
        exitOnErr("connection end");
	  
      
	});
	*/

	server.connect();

}
init();