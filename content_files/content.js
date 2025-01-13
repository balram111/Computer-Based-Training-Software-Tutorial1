$(document).ready(function(){
						   
						    window.buttonSequence = 0;
							window.bp1=0;
							window.bp2=0;
							
							
							
							window.extra301=0;
							window.extra302=0;
							window.extra303=0;
							window.extra304=0;
						    window.extra305=0;
							window.extra306=0;					
							window.extra307=0;
						    window.extra308=0;
							window.extra309=0;					
							window.extra310=0;
							window.extra311=0;					
							window.extra312=0;
							window.extra313=0;													
							window.extra314=0;
							window.extra315=0;
							window.extra316=0;
							window.extra317=0;
							window.extra318=0;
							window.extra319=0;
							window.extra320=0;
							window.extra321=0;
							window.extra322=0;
							window.extra323=0;
							window.extra324=0;
							window.extra325=0;
							window.extra326=0;
							window.extra327=0;
						    window.extra328=0;
							window.extra329=0;													
							window.extra330=0;
							window.extra331=0;
							window.extra332=0;
							window.extra333=0;
							window.extra334=0;
							window.extra335=0;
							window.extra336=0;
							window.extra337=0;
							window.extra338=0;
							window.extra339=0;
							window.extra340=0;
							window.extra341=0;
							window.extra342=0;
							window.extra343=0; 
							window.extra344=0;
							window.extra345=0;
							window.extra346=0;
							window.extra347=0;
							window.extra348=0;
							window.extra349=0;
							window.extra350=0; 
							window.extra351=0;
							window.extra352=0;
							window.extra353=0;
							window.extra354=0;
							window.extra355=0; 
							window.extra356=0;
							window.extra357=0;
							window.extra358=0;
							window.extra359=0;
							window.extra360=0;
							window.extra361=0;
							window.extra362=0; 
							window.extra363=0;
							window.extra364=0;
							window.extra365=0;
							window.extra366=0; 
							window.extra367=0;
							window.extra368=0;
							window.extra369=0;
							window.extra370=0;
							window.extra371=0; 
							window.extra372=0;
							window.extra373=0;
							window.extra374=0;
							window.extra375=0;
							window.extra376=0;
							window.extra377=0;
							window.extra378=0; 
							window.extra379=0;
							window.extra380=0;
							window.extra381=0; 
							window.extra382=0;
							window.extra383=0;
							window.extra384=0;
							window.extra385=0;
							window.extra386=0;
							window.extra387=0;
							window.extra388=0;
							
							
							
							
							
							
							
							
							
							
						     					 
							 $(".hand1").show();
						$(".hid,.hd").css("visibility","hidden");
							  $(".hdn").hide();
							 
							 
							 $(".first_button").click(function(){
															   buttonSequence = 1;
															   ContentCount = 8;
															   $(".hand,.ContentContainer,.tickA,.middle8").hide();
															   $(".tick1,.ContentFirstButton,.hand2").show().css("display","inline-block");
															    
															    $(".first_button8,.first_button9,.first_button10,.first_button11").css("color","#000");
																 clean();
																 });
							 
							 
							 
							 $(".first_button8").click(function(){
															   buttonSequence = 8;
															   ContentCount = 5;
															   $(".hand,.ContentContainer,.handA").hide();
															   $(".tick41A,.ContentFirstButton,.middle8,.tickAs1").show().css("display","inline-block");
															    $(".first_button8").css("color","#C00");
																 $(".first_button9,.first_button10,.first_button11").css("color","#000");
															    $(".first_button9,.first_button10").css("color","#000");
																$(".img_1,.img_2,.img_3,.img_4,.img_5,.img_6,.img_7,.img_8").css('visibility', 'visible');
																 $(".autorun").css('pointer-events', 'auto')
																   $(".backgrnd").removeClass("move");
																 clean();
																 });
							 
							  $(".first_button9").click(function(){
															   buttonSequence = 9;
															   ContentCount =2;
															   $(".hand,.ContentContainer,.handA").hide();
															   $(".tick42A,.ContentFirstButton,.middle9,.tickAs2").show().css("display","inline-block");
															   $(".first_button9").css("color","#C00");	
															    $(".first_button8,.first_button10,.first_button11").css("color","#000");
															    $(".autorun").css('pointer-events', 'auto')	
															    $(".first_button8,.first_button10").css("color","#000");
																$(".hand10").css('visibility', 'hidden');
												//$(".img2_1,.img2_2,.img2_3,.img2_4,.img2_5,.img2_6,.img2_7,.img2_8").css('visibility', 'visible');	
													 clean();			
																 });
							  
							   $(".first_button10").click(function(){
															   buttonSequence = 10;
															   ContentCount = 2;
															   $(".hand,.ContentContainer,.handA").hide();
															   $(".tick43A,.ContentFirstButton,.middle10,.tickAs3").show().css("display","inline-block");
															   $(".first_button10").css("color","#C00");
															   
															    $(".first_button8,.first_button9,.first_button11").css("color","#000");
															  $(".img10_1,.img10_2,.img10_3,.img10_4").css('visibility', 'visible');	
															  $(".autorun").css('pointer-events', 'auto')	
					/*											
				       $(".bull_11,.text15,.img3_2,.bull_10,.img3_3,.bull_9,.text13,.text14,.img3_4,.bull_12,.text12,.img3_5,.img3_6,.img3_7,.img3_8,.bull_13,.bull_14,.bull_15,.text16,.text17,.text18,.text19").css('visibility', 'hidden');*/
					    clean();
																 });
							 
							 
							 $(".first_button11").click(function(){
															   buttonSequence = 11;
															   ContentCount = 2;
															   $(".hand,.ContentContainer,.handA").hide();
															   $(".tick44A,.ContentFirstButton,.middle11,.tickAs3").show().css("display","inline-block");
															   $(".first_button11").css("color","#C00");
															    $(".first_button8,.first_button9,.first_button10").css("color","#000");
															    $(".first_button9,.first_button8,.first_button10").css("color","#000");
																$(".img11_1,.img11_2,.img11_3,.img11_4,.img11_5,.img11_6").css('visibility', 'visible');
																 $(".autorun").css('pointer-events', 'auto')	
													 clean();			
																 });
							 
							 
							 
							 
							  $(".second_button").click(function(){
																  buttonSequence = 2;
																  ContentCount = 6;
															  $(".hand,.ContentContainer,.tickA,.middle2").hide();
															  $(".tick2,.ContentSecondButton,.hand10").show().css("display","inline-block");	
															  $(".second_button1,.second_button2").css("color","#000");	
															  $(".Img1,.Img2,.Img3,.Img4,.Img5,.Img6").css('visibility', 'visible');
															  $(".autorun").css('pointer-events', 'auto')	
															   $(".div2").removeClass("move2");
															    $(".div3").removeClass("move3");
															   clean();
															  
																 });
							  
							  
							  $(".second_button1").click(function(){
																  buttonSequence = 15;
																  ContentCount = 5;
															  $(".hand,.ContentContainer,.handA").hide();
															  $(".ContentSecondButton,.middle2,.tickAs4,.tick31A").show().css("display","inline-block");
															   $(".second_button1").css("color","#C00");	
															    $(".second_button2").css("color","#000");
																$(".forwrd_lin").hide();
							 $(".autorun").css('pointer-events', 'auto')	
							 $(".Img1,.Img2,.Img3,.Img4,.Img5").css('visibility', 'visible');	 
								 clean();
																 });
							  
							  
							  
							  $(".second_button2").click(function(){
																  buttonSequence = 16;
																  ContentCount = 6;
															  $(".hand,.ContentContainer,.handA").hide();
															  $(".ContentSecondButton,.middle12,.tickAs5,.tick32A").show().css("display","inline-block");
															   $(".second_button2").css("color","#C00");	
															    $(".second_button1").css("color","#000");
										 $(".autorun").css('pointer-events', 'auto')	
											 clean();
																 });
							  
							  $(".second_button3").click(function(){
																  buttonSequence = 17;
																  ContentCount = 2;
															  $(".hand,.ContentContainer,.handA").hide();
															  $(".ContentSecondButton,.middle13,.tickAs6,.tick33A").show().css("display","inline-block");
															   $(".second_button3").css("color","#C00");	
															    $(".second_button1,.second_button2").css("color","#000");
																 $(".autorun").css('pointer-events', 'auto')	
																 clean();
															  
																 });
							  
							  
							   $(".third_button").click(function(){
																  buttonSequence =6;
																  ContentCount = 8;
															   $(".hand,.ContentContainer").hide();
															   $(".tick3,.ContentThirdButton,.hand4,.middle3").show().css("display","inline-block");
															  $(".img3_1,.img3_2").css('visibility', 'visible');
															   $(".autorun").css('pointer-events', 'auto')	
															   
															   $(".img3_1,.img3_2,.img3_3,.img3_4,.img3_5,.img3_6").css('visibility', 'visible');	
															    clean();
																 });
							   
							   
							    /*$(".third_button").click(function(){
																
																 
																  buttonSequence = 6;
																  ContentCount = 0;
															   $(".hand,.ContentContainer,.handA,.tickA").hide();
															   $(".ContentThirdButton,.tick5").show().css("display","inline-block");
															   $(".autorun").css('pointer-events', 'auto');
															   $(".hide1").css("visibility","hidden");
															   $(".hide2").hide();
															   $(".third_button1").css("color", "#000");
															   $(".third_button2").css("color", "#000");
															   $(".third_button3").css("color", "#000");
															   $(".third_button4").css("color", "#000");
															   $(".img3_9,.img3_10,.img3_11,.img3_12,.img3_13,.img3_14,.img3_15,.img3_16,.img3_17,.img3_18,.img3_19,.img3_20,.img3_21,.img3_188").hide();
		
		$(".text3_1,.text3_2,.text3_3").hide();
		  clean();
		  });
		*/
															   
	
							  
							  
							  
							  $(".third_button1").click(function(){
																  buttonSequence = 12;
																  ContentCount = 	3;
																  $(".hand,.handA,.hand3").hide();
															   $(".ContentContainer").hide();
															   $(".ContentThirdButton,.middle3_1,.tick7").show().css("display","inline-block");
															   $(".SubBtn").css("color", "#000000");
															   //$(".third_button1").css("color", "#CC0000");
															   //$(".third_button2").css("color", "#000");
															    $(".third_button1").css("color", "#CC0000");
															    $("third_button2,.second_button3").css("color", "#000");
															    $(".img5_2,.img5_3").css("visibility","hidden");
											
															   $(".text5_88,.text5_99,.text5_111,.text5_222,.text5_333,.text5_444").css("visibility","hidden");
								$(".img5_line2,.img5_line3,.img5_line4,.img5_line5,.img5_line6,.img5_line4_1,.img5_line8,.img5_line9").hide();
										                       $(".img5_1").css("visibility","visible");
										   clean();
														});
							  
							  
							  $(".third_button2").click(function(){
																  buttonSequence = 13;
																  ContentCount = 3;
																   $(".hand,.handA,.hand4").hide();
															   $(".ContentContainer,.middle").hide();
															   $(".ContentThirdButton,.middle3_2,.tick13").show().css("display","inline-block");
												$(".hide1").css("visibility","hidden");
															     $(".hide2").hide();
												
															   $(".SubBtn").css("color", "#000000");
															    $(".third_button2").css("color", "#CC0000");
															    $("third_button1,.second_button3,.second_button1").css("color", "#000");
									$(".img3_2,.img3_3,.img3_4,.img3_5,.img3_6,.img3_7,.img3_8,.img3_9,.text3_5,.text3_6").hide();
						  clean();
														});
							  
							   $(".third_button3").click(function(){
																  buttonSequence = 14;
																  ContentCount = 3;
																   $(".hand,.handA,.hand4").hide();
															   $(".ContentContainer").hide();
															   $(".ContentThirdButton,.middle3_3,.tick14").show().css("display","inline-block");
												$(".van_img1").fadeIn();
															   $(".SubBtn").css("color", "#000000");
															    $(".third_button3").css("color", "#CC0000");
															    $("third_button2,.second_button1,.second_button4").css("color", "#000");
						  clean();
														});
							   
							   $(".third_button4").click(function(){
																  buttonSequence = 3;
																  ContentCount = 4;
																  $(".hand,.handA,.hand3").hide();
															   $(".ContentContainer").hide();
															   $(".ContentThirdButton,.middle2_1,.tick3").show().css("display","inline-block");
															   $(".SubBtn").css("color", "#000000");
															   //$(".third_button1").css("color", "#CC0000");
															   //$(".third_button2").css("color", "#000");
															    $(".second_button1").css("color", "#CC0000");
															    $(".second_button2").css("color", "#000");
															    $(".img5_2,.img5_3").css("visibility","hidden");
											
															 $(".third_button4").css("color", "#CC0000");
															    $("third_button2,.second_button1,.second_button3").css("color", "#000");
																
															 
										  clean();
														});
							   
							   
							   
							   
							   
							   $(".fourth_button").click(function(){
																   buttonSequence = 4;
																   ContentCount =12;
															   $(".hand,.ContentContainer,.content10_4,.content10_5,.tickA,.middle5").hide();
															   $(".tick4,.ContentFourthButton,.hand5").show().css("display","inline-block");
															  	
															    $(".fourth_button13,.fourth_button14,.fourth_button15,.fourth_button16").css("color","#000");
																
																$(".img19_1,.img19_2,.img19_3,.img19_4").css('visibility', 'visible');	
																 $(".autorun").css('pointer-events', 'auto')	
																 clean();
																 });
							   
							   $(".fourth_button13").click(function(){
																   buttonSequence = 12;
																   ContentCount =4;
															   $(".hand,.ContentContainer,.content10_4,.content10_5,.handA").hide();
															   $(".tick4,.ContentFourthButton,.middle4,.tick6").show().css("display","inline-block");
															   $(".fourth_button13").css("color","#C00");	
															    $(".fourth_button14,.fourth_button15,.fourth_button16").css("color","#000");
								<!-- $(".img12_1,.img12_1_dup,.img12_right,.img12_angle1,.img12_angle2,.img12_angle3,.img12_2").css('visibility', 'hidden');-->
								 $(".img19_1,.img19_2,.img19_3,.img19_4").css('visibility', 'visible');	
								  $(".autorun").css('pointer-events', 'auto')	
								 
								  clean();
																 });
							   
							   
							   $(".fourth_button14").click(function(){
																   buttonSequence = 13;
																   ContentCount =2;
															   $(".hand,.ContentContainer,.content10_4,.content10_5,.handA").hide();
															   $(".tick4,.ContentFourthButton,.middle14,.tick7").show().css("display","inline-block");	
															    $(".fourth_button14").css("color","#C00");	
															    $(".fourth_button13,.fourth_button15,.fourth_button16").css("color","#000");
														 $(".autorun").css('pointer-events', 'auto')			
									$(".img13_1,.img13_2,.img13_3").css('visibility', 'visible');	
								 
								  clean();
									
																 });
							   
							   
							   $(".fourth_button15").click(function(){
																   buttonSequence =14;
																   ContentCount =2;
															   $(".hand,.ContentContainer,.content10_4,.content10_5,.handA").hide();
															   $(".tick4,.ContentFourthButton,.middle15,.tick8").show().css("display","inline-block");	
															    $(".fourth_button15").css("color","#C00");	
															    $(".fourth_button14,.fourth_button13,.fourth_button16").css("color","#000");
																 $(".autorun").css('pointer-events', 'auto')	
																$(".img14_1,.img14_2,.img14_3,.img14_4").css('visibility', 'visible');	
																 clean();
																 });
							   
							  
							   $(".fourth_button16").click(function(){
																   buttonSequence =20;
																   ContentCount =2;
															   $(".hand,.ContentContainer,.content10_4,.content10_5,.handA").hide();
															   $(".tick4,.ContentFourthButton,.middle20,.tick9").show().css("display","inline-block");	
															    $(".fourth_button16").css("color","#C00");	
															    $(".fourth_button14,.fourth_button13,.fourth_button15").css("color","#000");
																$(".img20_1,.img20_2,.img20_3").css('visibility', 'visible');	
																 $(".autorun").css('pointer-events', 'auto')	
																 clean();
																 });
							   
							    $(".fifth_button").click(function(){
																   buttonSequence = 19;
																   ContentCount =6;
															   $(".hand,.ContentContainer").hide();
													           $(".tick5,.ContentFifthButton,.middle5").show().css("display","inline-block");
														 $(".img19_1,.img19_2,.img19_3").css('visibility', 'visible');	   	   
							 $(".autorun").css('pointer-events', 'auto')	
								 clean();
																 });
								
								
								
								
								
						
								
								
								
								
								
								
								
								
								 $(".sixth_button").click(function(){
																   buttonSequence = 6;
																   ContentCount =5;
															   $(".hand,.ContentContainer").hide();
													           $(".tick6,.ContentSixthButton,.middle6").show().css("display","inline-block");	
															    clean();
																 });
								 
								  $(".seventh_button").click(function(){
																   buttonSequence = 7;
																   ContentCount =3;
															   $(".hand,.ContentContainer").hide();
													           $(".tick7,.ContentSeventhButton,.middle7").show().css("display","inline-block");
															    clean();
																 });
							 
						
						
						 clean=function(){
								$(".contentdiv,.contentdiv2,.contentdiv3").show();	 
					
								     $(".hid,.hd,.hand13,.hand3,.hand5").css("visibility","hidden");
							  $(".hdn").hide();
							  	$("").css('visibility', 'hidden'); 
$(".img2_1,.img2_2,.img2_3").hide();
	
								
										   clearTimeout(extra301)
																 extra301 = null;
																  clearTimeout(extra302)
																 extra302 = null;
																  clearTimeout(extra303)
																 extra303 = null;
																  clearTimeout(extra304)
																 extra304 = null;
															    clearTimeout(extra305)
																 extra305 = null;
																  clearTimeout(extra306)
																 extra306 = null;
																    clearTimeout(extra307)
																 extra307 = null;
																  clearTimeout(extra308)
																 extra308 = null;
																 
																  clearTimeout(extra309)
																 extra309 = null;
																 clearTimeout(extra310)
																 extra310 = null;
																  clearTimeout(extra311)
																 extra311 = null;
																  clearTimeout(extra312)
																 extra312 = null;
																  clearTimeout(extra313)
																 extra313 = null;
																  clearTimeout(extra314)
																 extra314 = null;
																  clearTimeout(extra315)
																 extra315 = null;
															    clearTimeout(extra316)
																 extra316 = null;
															      clearTimeout(extra317)
																 extra317 = null;
																  clearTimeout(extra318)
																 extra318 = null;
																  clearTimeout(extra319)
																 extra319 = null;
																  clearTimeout(extra320)
																 extra320 = null;
																 
																 
																 clearTimeout(extra321)
																 extra321 = null;
																  clearTimeout(extra322)
																 extra322 = null;
																 clearTimeout(extra323)
																 extra323 = null;
																  clearTimeout(extra324)
																 extra324 = null;	 
																 clearTimeout(extra325)
																 extra325 = null;
																  clearTimeout(extra326)
																 extra326 = null;	 	 	
																 clearTimeout(extra327)
																 extra327 = null;
																  clearTimeout(extra328)
																 extra328 = null;	 
																 
																  clearTimeout(extra329)
																 extra329 = null;
																  clearTimeout(extra330)
																 extra330 = null;	 
																 
																  clearTimeout(extra331)
																 extra331 = null;
																  clearTimeout(extra332)
																 extra332 = null;	 
																 
																  clearTimeout(extra333)
																 extra333 = null;
																  clearTimeout(extra334)
																 extra334 = null;
																 clearTimeout(extra335)
																 extra335 = null;
																  clearTimeout(extra336)
																 extra336 = null;
																  clearTimeout(extra337)
																 extra337 = null;
																 clearTimeout(extra338)
																 extra338 = null;
																  clearTimeout(extra339)
																 extra339 = null;
																  clearTimeout(extra340)
																 extra340 = null;
																  clearTimeout(extra341)
																 extra341 = null;
																 
																 clearTimeout(extra342)
																 extra342 = null;
																  clearTimeout(extra343)
																 extra343 = null;
																 clearTimeout(extra344)
																 extra344 = null;
																  clearTimeout(extra345)
																 extra345 = null;
																  clearTimeout(extra346)
																 extra346 = null;
																 clearTimeout(extra347)
																 extra347 = null;
																  clearTimeout(extra348)
																 extra348 = null;
																  clearTimeout(extra349)
																 extra349 = null;
																  clearTimeout(extra350)
																 extra350 = null;
																 
																  clearTimeout(extra351)
																 extra351 = null;
																  clearTimeout(extra352)
																 extra352 = null;
																 clearTimeout(extra353)
																 extra353 = null;
																  clearTimeout(extra354)
																 extra354 = null;
																  clearTimeout(extra355)
																 extra355 = null;
																 clearTimeout(extra356)
																 extra356 = null;
																  clearTimeout(extra357)
																 extra357 = null;
																  clearTimeout(extra358)
																 extra358 = null;
																  clearTimeout(extra359)
																 extra359 = null;

																  clearTimeout(extra360)
																 extra360 = null;
																  clearTimeout(extra361)
																 extra361 = null;
																  clearTimeout(extra362)
																 extra362 = null;
																 clearTimeout(extra363)
																 extra363 = null;
																 clearTimeout(extra364)
																 extra364 = null;
																 
										                         clearTimeout(extra365)
																 extra365 = null;
																 
																 clearTimeout(extra366)
																 extra366 = null;
																  clearTimeout(extra367)
																 extra367 = null;
																 clearTimeout(extra368)
																 extra368 = null;
																  clearTimeout(extra369)
																 extra369 = null;
																  clearTimeout(extra370)
																 extra370 = null;
																 clearTimeout(extra371)
																 extra371 = null;
																  clearTimeout(extra372)
																 extra372 = null;
																  clearTimeout(extra373)
																 extra373 = null;
																  clearTimeout(extra374)
																 extra374 = null;
																 
																  clearTimeout(extra375)
																 extra375 = null;
																  clearTimeout(extra376)
																 extra376 = null;
																 clearTimeout(extra377)
																 extra377 = null;
																  clearTimeout(extra378)
																 extra378 = null;
																  clearTimeout(extra379)
																 extra379 = null;
																 clearTimeout(extra380)
																 extra380 = null;
																  clearTimeout(extra381)
																 extra381 = null;
																  clearTimeout(extra382)
																 extra382 = null;
																  clearTimeout(extra383)
																 extra383 = null;

																  clearTimeout(extra384)
																 extra384 = null;
																  clearTimeout(extra385)
																 extra385 = null;
																  clearTimeout(extra386)
																 extra386 = null;
																 clearTimeout(extra387)
																 extra387 = null;
																 clearTimeout(extra388)
																 extra388 = null;
							
							  
							 }
						
						
						
						
						
						
							   
				  $(".check").click(function(){
								
						  		 
							     $(".content10_4,.content10_5").show();
								 
								  ht=$(".td33").height(); 
								 $(".line").css("height",ht+"px") 
								
						  });
				  
				 
				  
				  $(".cross_BM").click(function(){
								
						  		 
							     $(".content10_4,.content10_5").hide();
								 
								
						  });
							 
							
							 
							 
						    
						
												   });
						
