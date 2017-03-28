		var gameMode;		// 0 = infinity 1 = test
		var infModeRange = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
		var testModeDifficulty = 0;

		var len = 0;

		var standardMinionName = new Array();
		var standardMinionId = new Array();
		var standardMinionIdx = 0;

		var standardSpellName = new Array();
		var standardSpellId = new Array();
		var standardSpellIdx = 0;

		var standardWeaponName = new Array();
		var standardWeaponId = new Array();
		var standardWeaponIdx = 0;

		var aprilByeMinionName = new Array();
		var aprilByeMinionId = new Array();
		var aprilByeMinionIdx = 0;

		var aprilByeSpellName = new Array();
		var aprilByeSpellId = new Array();
		var aprilByeSpellIdx = 0;

		var aprilByeWeaponName = new Array();
		var aprilByeWeaponId = new Array();
		var aprilByeWeaponIdx = 0;

		var wildMinionName = new Array();
		var wildMinionId = new Array();
		var wildMinionIdx = 0;

		var wildSpellName = new Array();
		var wildSpellId = new Array();
		var wildSpellIdx = 0;

		var wildWeaponName = new Array();
		var wildWeaponId = new Array();
		var wildWeaponIdx = 0;

		var nameArr;
		var idArr;
		var idxArr;

		var playingCardNameList = new Array();
		var playingCardIdList = new Array();
		var playingCardIdxList = new Array();

		var playingCardIdx = 0;

		var answerIdx;

		var game = 0;
		var win = 0;

		$(function() {
			var ajaxRequest = $.ajax({
				url: 'https://api.hearthstonejson.com/v1/17994/koKR/cards.collectible.json',
				dataType: 'json',
				success: function(data) {
					var len = data.length;

					$.each(data, function(index, item) {
						switch(data[index].set) {
							case "KARA":
							case "GANGS":
							case "EXPERT1":
							case "OG":
							case "CORE":
								if(data[index].type == "MINION") {
									standardMinionName[standardMinionIdx] = data[index].name;
									standardMinionId[standardMinionIdx] = data[index].id;
									standardMinionIdx++;
								} else if(data[index].type == "SPELL") {
									standardSpellName[standardSpellIdx] = data[index].name;
									standardSpellId[standardSpellIdx] = data[index].id;
									standardSpellIdx++;
								} else if(data[index].type == "WEAPON") {
									standardWeaponName[standardWeaponIdx] = data[index].name;
									standardWeaponId[standardWeaponIdx] = data[index].id;
									standardWeaponIdx++;
								}
								break;

							case "TGT":
							case "BRM":
							case "LOE":
								if(data[index].type == "MINION") {
									aprilByeMinionName[aprilByeMinionIdx] = data[index].name;
									aprilByeMinionId[aprilByeMinionIdx] = data[index].id;
									aprilByeMinionIdx++;
								} else if(data[index].type == "SPELL") {
									aprilByeSpellName[aprilByeSpellIdx] = data[index].name;
									aprilByeSpellId[aprilByeSpellIdx] = data[index].id;
									aprilByeSpellIdx++;
								} else if(data[index].type == "WEAPON") {
									aprilByeWeaponName[aprilByeWeaponIdx] = data[index].name;
									aprilByeWeaponId[aprilByeWeaponIdx] = data[index].id;
									aprilByeWeaponIdx++;
								}

								break;


							case "GVG":
							case "NAXX":
							case "REWARD":
							case "PROMO":
								if(data[index].type == "MINION") {
									wildMinionName[wildMinionIdx] = data[index].name;
									wildMinionId[wildMinionIdx] = data[index].id;
									wildMinionIdx++;
								} else if(data[index].type == "SPELL") {
									wildSpellName[wildSpellIdx] = data[index].name;
									wildSpellId[wildSpellIdx] = data[index].id;
									wildSpellIdx++;
								} else if(data[index].type == "WEAPON") {
									wildWeaponName[wildWeaponIdx] = data[index].name;
									wildWeaponId[wildWeaponIdx] = data[index].id;
									wildWeaponIdx++;
								}
								break;
						}
					});
				}
			});

			$.when(ajaxRequest).done(function() {
				nameArr = new Array
				(standardMinionName, standardSpellName, standardWeaponName,
				aprilByeMinionName, aprilByeSpellName, aprilByeWeaponName,
				wildMinionName, wildSpellName, wildWeaponName);

				idArr = new Array
				(standardMinionId, standardSpellId, standardWeaponId,
				aprilByeMinionId, aprilByeSpellId, aprilByeWeaponId,
				wildMinionId, wildSpellId, wildWeaponId);

				idxArr = new Array
				(standardMinionIdx, standardSpellIdx, standardWeaponIdx,
				aprilByeMinionIdx, aprilByeSpellIdx, aprilByeWeaponIdx,
				wildMinionIdx, wildSpellIdx, wildWeaponIdx);

				$("#infMode").css("display", "none");
				$("#testMode").css("display", "none");

				$("#mainDiv p:nth-child(2)").click(function() {
					$("#mainDiv p").css("display", "none");
					gameMode = 0;

					playingCardNameList = new Array();
					playingCardIdList = new Array();
					playingCardIdxList = new Array();

					playingCardIdx = 0;

					$("#mainDiv").fadeOut(1200, function() {
						$("#infMode").fadeIn(1200);
					});
				});

				$("#mainDiv p:last").click(function() {
					$("#mainDiv p").css("display", "none");
					gameMode = 1;

					playingCardNameList = new Array();
					playingCardIdList = new Array();
					playingCardIdxList = new Array();

					playingCardIdx = 0;

					$("#mainDiv").fadeOut(1200, function() {
						$("#testMode").fadeIn(1200);
					});
				});

				$("#infMode p:not(.startBtn)").toggle(function() {
					$(this).css("background-color", "#3668a7");
					$(this).css("color", "#fff");
					infModeRange[($("p").index(this)) - 2] = 1;
				}, function() {
					$(this).css("background-color", "#fff");
					$(this).css("color", "#3668a7");
					infModeRange[($("p").index(this)) - 2] = 0;
				});

				$("#infMode .startBtn").click(function() {
					playingCardNameList = new Array();
					playingCardIdList = new Array();
					playingCardIdxList = new Array();

					playingCardIdx = 0;

					game++;

					$("#result1").text("문제 : " + game + "번");
					$("#result2").text("정답 : " + win + " / " + game);

					var diff = 0;

					for(var i in infModeRange) {
						if(infModeRange[i] == 1) {
							//console.log(i);
							diff++;
							break;
						}
					}

					if(diff == 0) {
						$("#infMode > #tip").text("최소 하나의 범위를 골라주세요!");
						$("#infMode > #tip").css("font-weight", "bold").css("color", "red");
					} else {
						for(var i in infModeRange) {
							if(infModeRange[i] == 1) {
								playingCardNameList[playingCardIdx] = nameArr[i];
								playingCardIdxList[playingCardIdx] = idxArr[i];
								////alert(playingCardIdxList[playingCardIdx]);
								playingCardIdList[playingCardIdx] = idArr[i];
								playingCardIdx++;
							}
						}

						$("#infMode p").css("display", "none");

						var allIndex = 0;

						for(var i in playingCardIdxList) {
							allIndex += playingCardIdxList[i];
						}

						//alert(allIndex);

						var rndIndex = Math.floor(Math.random() * allIndex);

						var rndArr = 0;
						var temp = 0;

						for(rndArr in playingCardIdxList) {
							temp += playingCardIdxList[rndArr];

							if(temp > rndIndex) {
								break;
							}
						}

						////alert(rndIndex + "@@" + rndArr);

						var rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

						/*var cardType = -1;	// 0 = MINION 1 = SPELL 2 = WEAPON

						////alert(playingCardIdList[rndArr][rndCard]);
						////alert(standardMinionId[0]);

						if(cardType < 0) {
							for(var i in standardMinionId) {
								if(standardMinionId[i] == playingCardIdList[rndArr][rndCard]) {
									cardType = 0;
									break;
								}
							}
						}

						if(cardType < 0) {
							for(var i in aprilByeMinionId) {
								if(aprilByeMinionId[i] == playingCardIdList[rndArr][rndCard]) {
									cardType = 0;
									break;
								}
							}
						}

						if(cardType < 0) {
							for(var i in wildMinionId) {
								if(wildMinionId[i] == playingCardIdList[rndArr][rndCard]) {
									cardType = 0;
									break;
								}
							}
						}

						if(cardType < 0) {
							for(var i in standardSpellId) {
								if(standardSpellId[i] == playingCardIdList[rndArr][rndCard]) {
									cardType = 1;
									break;
								}
							}
						}

						if(cardType < 0) {
							for(var i in aprilByeSpellId) {
								if(aprilByeSpellId[i] == playingCardIdList[rndArr][rndCard]) {
									cardType = 1;
									break;
								}
							}
						}

						if(cardType < 0) {
							for(var i in wildSpellId) {
								if(wildSpellId[i] == playingCardIdList[rndArr][rndCard]) {
									cardType = 1;
									break;
								}
							}
						}

						if(cardType < 0) {
							cardType = 2;
						}*/

						////alert(cardType);

						////alert(playingCardNameList);
						//console.log(playingCardIdx + "#" + idxArr[rndArr]);

						//console.log(rndArr + "@" + rndCard);

						var duplicatedName = new Array();
						duplicatedName[0] = playingCardNameList[rndArr][rndCard];

						$("#mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
								playingCardIdList[rndArr][rndCard] + ".png)");

						/*var rndRange;

						if(cardType == 0) {
							rndRange = idxArr[0] + idxArr[3] + idxArr[6];
						} else if(cardType == 1) {
							rndRange = idxArr[1] + idxArr[4] + idxArr[7];
						} else {
							rndRange = idxArr[2] + idxArr[5] + idxArr[8];
						}*/

						answerIdx = Math.floor(Math.random() * 5) + 1;

						var dIdx = 0;

						$("#selectBtnDiv .selectBtn:nth-child(" + answerIdx + ")").text(playingCardNameList[rndArr][rndCard]);

						duplicatedName[5] = playingCardNameList[rndArr][rndCard];

						for(var i=0; i<5; i++) {
							if(i == answerIdx-1) {
								continue;
							}

							var rndIndex2 = Math.floor(Math.random() * allIndex);

							var rndArr2 = 0;
							var temp2 = 0;

							for(rndArr2 in playingCardIdxList) {
								temp2 += playingCardIdxList[rndArr];

								if(temp2 > rndIndex2) {
									break;
								}
							}

							////alert(rndIndex + "@@" + rndArr);

							var rndCard2 = Math.floor(Math.random() * playingCardIdxList[rndArr2]);
							var isDuplicated = false;

							for(var j in duplicatedName) {
								if(duplicatedName[j] == playingCardNameList[rndArr2][rndCard2]) {
									isDuplicated = true;
									break;
								}
							}

							if(isDuplicated) {
								i--;
								isDuplicated = false;
								continue;
							}

							var name = playingCardNameList[rndArr2][rndCard2];
							duplicatedName[dIdx++] = name;
							alert(duplicatedName[dIdx-1]);

							//console.log(cardType);
							//console.log(rndCard);

							/*if(cardType == 0) {
								if(rndCard < idxArr[0]) {
									name = standardMinionName[rndCard];
								} else if(rndCard < idxArr[0] + idxArr[3]) {
									name = aprilByeMinionName[rndCard - idxArr[0]];
								} else {
									name = wildMinionName[rndCard - idxArr[0] - idxArr[3]];
								}
							} else if(cardType == 1) {
								if(rndCard < idxArr[1]) {
									name = standardSpellName[rndCard];
								} else if(rndCard < idxArr[1] + idxArr[4]) {
									name = aprilByeSpellName[rndCard - idxArr[1]];
								} else {
									name = wildSpellName[rndCard - idxArr[1] - idxArr[4]];
								}
							} else {
								if(rndCard < idxArr[2]) {
									name = standardWeaponName[rndCard];
								} else if(rndCard < idxArr[2] + idxArr[5]) {
									name = aprilByeWeaponName[rndCard - idxArr[2]];
								} else {
									name = wildWeaponName[rndCard - idxArr[2] - idxArr[5]];
								}
							}*/

							//console.log(rndCard);
							//console.log(name);
							//console.log("-----");
							//alert("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")");
							$("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")").text(name);
						}

						////alert(playingCardList + "@" + playingCardIdx);
						$("#infMode").fadeOut(1200, function() {
							$("#gameDiv").fadeIn(1200);
						});
					}
				});

				$("#selectBtnDiv p").click(function() {
					$("#mask").css("background-size", "200px 300px");
					$("#mask").css("background-position", "50px");
					$("#mask").css("background-position-y", "0px");
					alert(answerIdx);
					$("#gameDiv #selectBtnDiv .selectBtn:not(:nth-child(" + answerIdx + "))").fadeOut(1200, function() {
						$("#gameDiv #selectBtn2, #gameDiv #selectBtn3").css("display", "inline-block");
					});


					//alert((($("p").index(this)) - 18));


					if((($("p").index(this)) - 18) == answerIdx) {
						win++;
						$("#answer").text("정답입니다!");
					} else {
						$("#answer").text("오답입니다!");
					}

					$("#answer").css("opacity", "100");

					$("#result2").text("정답 : " + win + " / " + game);
				});

				$("#gameDiv #selectBtn2").click(function() {
					$("#gameDiv").fadeOut(1200, function() {
						game = 0;
						win = 0;

						$("#mask").css("background-size", "1500px 2200px");
						$("#mask").css("background-position", "-580px");
						$("#mask").css("background-position-y", "-580px");

						$("p").css("display", "inline-block")

						//$(".selectBtn").css("display", "inline-block");
						$("#gameDiv #selectBtn2, #gameDiv .selectBtn:last").css("display", "none");

						$("#answer").css("opacity", "0");
						$("#answer, #result1, #result2").css("display", "block");

						//$("#mainDiv .selectBtn").css("display", "inline-block");
						$("#mainDiv").fadeIn(1200);
					});
				});

				$("#gameDiv .selectBtn:last").click(function() {
					game++;
					$("#result1").text("문제 : " + game + "번");

					$("#mask").css("background-size", "1500px 2200px");
					$("#mask").css("background-position", "-580px");
					$("#mask").css("background-position-y", "-580px");

					$("#gameDiv .selectBtn:last, #gameDiv #selectBtn2").css("display", "none");
					$("#answer").css("opacity", "0");

					$("#selectBtnDiv .selectBtn").css("display", "inline-block");
						var allIndex = 0;

						for(var i in playingCardIdxList) {
							allIndex += playingCardIdxList[i];
						}

						//alert(allIndex);

						var rndIndex = Math.floor(Math.random() * allIndex);

						var rndArr = 0;
						var temp = 0;

						for(rndArr in playingCardIdxList) {
							temp += playingCardIdxList[rndArr];

							if(temp > rndIndex) {
								break;
							}
						}

						////alert(rndIndex + "@@" + rndArr);

						var rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

						alert(playingCardIdxList[0]);

						var duplicatedName = new Array();
						duplicatedName[0] = playingCardNameList[rndArr][rndCard];

						$("#mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
								playingCardIdList[rndArr][rndCard] + ".png)");

						/*var rndRange;

						if(cardType == 0) {
							rndRange = idxArr[0] + idxArr[3] + idxArr[6];
						} else if(cardType == 1) {
							rndRange = idxArr[1] + idxArr[4] + idxArr[7];
						} else {
							rndRange = idxArr[2] + idxArr[5] + idxArr[8];
						}*/

						answerIdx = Math.floor(Math.random() * 5) + 1;

						var dIdx = 0;

						$("#selectBtnDiv .selectBtn:nth-child(" + answerIdx + ")").text(playingCardNameList[rndArr][rndCard]);

						duplicatedName[5] = playingCardNameList[rndArr][rndCard];

						for(var i=0; i<5; i++) {
							if(i == answerIdx-1) {
								continue;
							}

							var rndIndex2 = Math.floor(Math.random() * allIndex);

							var rndArr2 = 0;
							var temp2 = 0;

							for(rndArr2 in playingCardIdxList) {
								temp2 += playingCardIdxList[rndArr];

								if(temp2 > rndIndex2) {
									break;
								}
							}

							////alert(rndIndex + "@@" + rndArr);

							var rndCard2 = Math.floor(Math.random() * playingCardIdxList[rndArr2]);
							var isDuplicated = false;

							for(var j in duplicatedName) {
								if(duplicatedName[j] == playingCardNameList[rndArr2][rndCard2]) {
									isDuplicated = true;
									break;
								}
							}

							if(isDuplicated) {
								i--;
								isDuplicated = false;
								continue;
							}

							var name = playingCardNameList[rndArr2][rndCard2];
							duplicatedName[dIdx++] = name;
							alert(duplicatedName[dIdx-1]);

							//console.log(rndCard);
							//console.log(name);
							//console.log("-----");
							//alert("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")");
							$("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")").text(name);
						}
				})

				$("#testMode p").click(function() {
					if(($("p").index(this)) == 13) {
						playingCardNameList = new Array(nameArr[0], nameArr[1], nameArr[2]);
						playingCardIdxList = new Array(idxArr[0], idxArr[1], idxArr[2]);
						playingCardIdList = new Array(idArr[0], idArr[1], idArr[2]);
					} else if(($("p").index(this)) == 14) {
						playingCardNameList = new Array(nameArr[0], nameArr[1], nameArr[2], nameArr[3], nameArr[4], nameArr[5]);
						playingCardIdxList = new Array(idxArr[0], idxArr[1], idxArr[2], idxArr[3], idxArr[4], idxArr[5]);
						playingCardIdList = new Array(idArr[0], idArr[1], idArr[2], idArr[3], idArr[4], idArr[5]);
					} else {
						playingCardNameList = nameArr;
						playingCardIdxList = idxArr;
						playingCardIdList = idArr;
					}

					$(this).css("background-color", "#3668a7");
					$(this).css("color", "#fff");
					$("#testMode p").css("display", "none");
					var allIndex = 0;

					for(var i in playingCardIdxList) {
						allIndex += playingCardIdxList[i];
					}

					//alert(allIndex);

					var rndIndex = Math.floor(Math.random() * allIndex);

					var rndArr = 0;
					var temp = 0;

					for(rndArr in playingCardIdxList) {
						temp += playingCardIdxList[rndArr];

						if(temp > rndIndex) {
							break;
						}
					}

					////alert(rndIndex + "@@" + rndArr);

					var rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

					var duplicatedName = new Array();
					duplicatedName[0] = playingCardNameList[rndArr][rndCard];

					$("#gameDiv2 #mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
							playingCardIdList[rndArr][rndCard] + ".png)");

					/*var rndRange;

					if(cardType == 0) {
						rndRange = idxArr[0] + idxArr[3] + idxArr[6];
					} else if(cardType == 1) {
						rndRange = idxArr[1] + idxArr[4] + idxArr[7];
					} else {
						rndRange = idxArr[2] + idxArr[5] + idxArr[8];
					}*/

/*					answerIdx = Math.floor(Math.random() * 5) + 1;

					var dIdx = 0;

					$("#selectBtnDiv .selectBtn:nth-child(" + answerIdx + ")").text(playingCardNameList[rndArr][rndCard]);

					duplicatedName[5] = playingCardNameList[rndArr][rndCard];

					for(var i=0; i<5; i++) {
						if(i == answerIdx-1) {
							continue;
						}

						var rndIndex2 = Math.floor(Math.random() * allIndex);

						var rndArr2 = 0;
						var temp2 = 0;

						for(rndArr2 in playingCardIdxList) {
							temp2 += playingCardIdxList[rndArr];

							if(temp2 > rndIndex2) {
								break;
							}
						}

						////alert(rndIndex + "@@" + rndArr);

						var rndCard2 = Math.floor(Math.random() * playingCardIdxList[rndArr2]);
						var isDuplicated = false;

						for(var j in duplicatedName) {
							if(duplicatedName[j] == playingCardNameList[rndArr2][rndCard2]) {
								isDuplicated = true;
								break;
							}
						}

						if(isDuplicated) {
							i--;
							isDuplicated = false;
							continue;
						}

						var name = playingCardNameList[rndArr2][rndCard2];
						duplicatedName[dIdx++] = name;
						alert(duplicatedName[dIdx-1]);


						$("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")").text(name);
					}*/

					////alert(playingCardList + "@" + playingCardIdx);
					$("#testMode").fadeOut(1200, function() {
						$("#gameDiv2").fadeIn(1200);
					});

					$("#submitBtn").click(function() {
						$("#gameDiv2 input").attr("disabled", true);
						$("#gameDiv2 .selectBtn").css("display", "inline-block");
						$("#submitBtn").css("display", "none");
					});
				});
			});
		});