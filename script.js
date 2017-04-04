		var gameMode;		// 0 = infinity 1 = test
		var infModeRange = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
		var testModeDifficulty = 0;

		var len = 0;

		var standardMinionName = new Array();
		var standardMinionId = new Array();
		var standardMinionHealth = new Array();
		var standardMinionAttack = new Array();
		var standardMinionRarity = new Array();
		var standardMinionCost = new Array();
		var standardMinionSet = new Array();
		var standardMinionClass = new Array();
		var standardMinionIdx = 0;

		var standardSpellName = new Array();
		var standardSpellId = new Array();
		var standardSpellRarity = new Array();
		var standardSpellCost = new Array();
		var standardSpellSet = new Array();
		var standardSpellClass = new Array();
		var standardSpellIdx = 0;

		var standardWeaponName = new Array();
		var standardWeaponId = new Array();
		var standardWeaponHealth = new Array();
		var standardWeaponAttack = new Array();
		var standardWeaponRarity = new Array();
		var standardWeaponCost = new Array();
		var standardWeaponSet = new Array();
		var standardWeaponClass = new Array();
		var standardWeaponIdx = 0;

		var aprilByeMinionName = new Array();
		var aprilByeMinionId = new Array();
		var aprilByeMinionHealth = new Array();
		var aprilByeMinionAttack = new Array();
		var aprilByeMinionRarity = new Array();
		var aprilByeMinionCost = new Array();
		var aprilByeMinionSet = new Array();
		var aprilByeMinionClass = new Array();
		var aprilByeMinionIdx = 0;

		var aprilByeSpellName = new Array();
		var aprilByeSpellId = new Array();
		var aprilByeSpellRarity = new Array();
		var aprilByeSpellCost = new Array();
		var aprilByeSpellSet = new Array();
		var aprilByeSpellClass = new Array();
		var aprilByeSpellIdx = 0;

		var aprilByeWeaponName = new Array();
		var aprilByeWeaponId = new Array();
		var aprilByeWeaponHealth = new Array();
		var aprilByeWeaponAttack = new Array();
		var aprilByeWeaponRarity = new Array();
		var aprilByeWeaponCost = new Array();
		var aprilByeWeaponSet = new Array();
		var aprilByeWeaponClass = new Array();
		var aprilByeWeaponIdx = 0;

		var wildMinionName = new Array();
		var wildMinionId = new Array();
		var wildMinionHealth = new Array();
		var wildMinionAttack = new Array();
		var wildMinionRarity = new Array();
		var wildMinionCost = new Array();
		var wildMinionSet = new Array();
		var wildMinionClass = new Array();
		var wildMinionIdx = 0;

		var wildSpellName = new Array();
		var wildSpellId = new Array();
		var wildSpellRarity = new Array();
		var wildSpellCost = new Array();
		var wildSpellSet = new Array();
		var wildSpellClass = new Array();
		var wildSpellIdx = 0;

		var wildWeaponName = new Array();
		var wildWeaponId = new Array();
		var wildWeaponHealth = new Array();
		var wildWeaponAttack = new Array();
		var wildWeaponRarity = new Array();
		var wildWeaponCost = new Array();
		var wildWeaponSet = new Array();
		var wildWeaponClass = new Array();
		var wildWeaponIdx = 0;

		var nameArr;
		var idArr;
		var idxArr;
		var healthArr;
		var attackArr;
		var rarityArr;
		var costArr;
		var setArr;
		var classArr;

		var playingCardNameList = new Array();
		var playingCardIdList = new Array();
		var playingCardIdxList = new Array();

		var playingCardIdx = 0;

		var rankName = new Array("피자배달부", "전설", "1등급", "4등급", "7등급", "10등급", "15등급", "20등급", "25등급", "하린이");

		var rank = 0;

		var answerIdx;

		var isGaming = false;

		var game = 0;
		var win = 0;

		var diff, allIndex, rndIndex, rndArr, temp, rndCard, dIdx, rndIndex2, rndArr2, temp2, rndCard2, isDuplicated, name, duplicatedName;

		var isAnimationDone = false;

		var isHaveAttack = false;

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
								standardMinionHealth[standardMinionIdx] = data[index].health;
								standardMinionAttack[standardMinionIdx] = data[index].attack;
								standardMinionRarity[standardMinionIdx] = data[index].rarity;
								standardMinionCost[standardMinionIdx] = data[index].cost;
								standardMinionSet[standardMinionIdx] = data[index].set;
								standardMinionClass[standardMinionIdx] = data[index].playerClass;
								standardMinionIdx++;
							} else if(data[index].type == "SPELL") {
								standardSpellName[standardSpellIdx] = data[index].name;
								standardSpellId[standardSpellIdx] = data[index].id;
								standardSpellRarity[standardSpellIdx] = data[index].rarity;
								standardSpellCost[standardSpellIdx] = data[index].cost;
								standardSpellSet[standardSpellIdx] = data[index].set;
								standardSpellClass[standardSpellIdx] = data[index].playerClass;
								standardSpellIdx++;
							} else if(data[index].type == "WEAPON") {
								standardWeaponName[standardWeaponIdx] = data[index].name;
								standardWeaponId[standardWeaponIdx] = data[index].id;
								standardWeaponHealth[standardWeaponIdx] = data[index].durability;
								standardWeaponAttack[standardWeaponIdx] = data[index].attack;
								standardWeaponRarity[standardWeaponIdx] = data[index].rarity;
								standardWeaponCost[standardWeaponIdx] = data[index].cost;
								standardWeaponSet[standardWeaponIdx] = data[index].set;
								standardWeaponClass[standardWeaponIdx] = data[index].playerClass;
								standardWeaponIdx++;
							}
							break;

							case "TGT":
							case "BRM":
							case "LOE":
							if(data[index].type == "MINION") {
								aprilByeMinionName[aprilByeMinionIdx] = data[index].name;
								aprilByeMinionId[aprilByeMinionIdx] = data[index].id;
								aprilByeMinionHealth[aprilByeMinionIdx] = data[index].health;
								aprilByeMinionAttack[aprilByeMinionIdx] = data[index].attack;
								aprilByeMinionRarity[aprilByeMinionIdx] = data[index].rarity;
								aprilByeMinionCost[aprilByeMinionIdx] = data[index].cost;
								aprilByeMinionSet[aprilByeMinionIdx] = data[index].set;
								aprilByeMinionClass[aprilByeMinionIdx] = data[index].playerClass;
								aprilByeMinionIdx++;
							} else if(data[index].type == "SPELL") {
								aprilByeSpellName[aprilByeSpellIdx] = data[index].name;
								aprilByeSpellId[aprilByeSpellIdx] = data[index].id;
								aprilByeSpellRarity[aprilByeSpellIdx] = data[index].rarity;
								aprilByeSpellCost[aprilByeSpellIdx] = data[index].cost;
								aprilByeSpellSet[aprilByeSpellIdx] = data[index].set;
								aprilByeSpellClass[aprilByeSpellIdx] = data[index].playerClass;
								aprilByeSpellIdx++;
							} else if(data[index].type == "WEAPON") {
								aprilByeWeaponName[aprilByeWeaponIdx] = data[index].name;
								aprilByeWeaponId[aprilByeWeaponIdx] = data[index].id;
								aprilByeWeaponHealth[aprilByeWeaponIdx] = data[index].durability;
								aprilByeWeaponAttack[aprilByeWeaponIdx] = data[index].attack;
								aprilByeWeaponRarity[aprilByeWeaponIdx] = data[index].rarity;
								aprilByeWeaponCost[aprilByeWeaponIdx] = data[index].cost;
								aprilByeWeaponSet[aprilByeWeaponIdx] = data[index].set;
								aprilByeWeaponClass[aprilByeWeaponIdx] = data[index].playerClass;
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
								wildMinionHealth[wildMinionIdx] = data[index].health;
								wildMinionAttack[wildMinionIdx] = data[index].attack;
								wildMinionRarity[wildMinionIdx] = data[index].rarity;
								wildMinionCost[wildMinionIdx] = data[index].cost;
								wildMinionSet[wildMinionIdx] = data[index].set;
								wildMinionClass[wildMinionIdx] = data[index].playerClass;
								wildMinionIdx++;
							} else if(data[index].type == "SPELL") {
								wildSpellName[wildSpellIdx] = data[index].name;
								wildSpellId[wildSpellIdx] = data[index].id;
								wildSpellRarity[wildSpellIdx] = data[index].rarity;
								wildSpellCost[wildSpellIdx] = data[index].cost;
								wildSpellSet[wildSpellIdx] = data[index].set;
								wildSpellClass[wildSpellIdx] = data[index].playerClass;
								wildSpellIdx++;
							} else if(data[index].type == "WEAPON") {
								wildWeaponName[wildWeaponIdx] = data[index].name;
								wildWeaponId[wildWeaponIdx] = data[index].id;
								wildWeaponHealth[wildWeaponIdx] = data[index].durability;
								wildWeaponAttack[wildWeaponIdx] = data[index].attack;
								wildWeaponRarity[wildWeaponIdx] = data[index].rarity;
								wildWeaponCost[wildWeaponIdx] = data[index].cost;
								wildWeaponSet[wildWeaponIdx] = data[index].set;
								wildWeaponClass[wildWeaponIdx] = data[index].playerClass;
								wildWeaponIdx++;
							}
							break;
						}
					});
				}
			});

		$.when(ajaxRequest).done(function() {
			alert("로딩 완료.");
			$("#gameDiv2 #answer:nth-child(2)").css("marginBottom", "10px");
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

			attackArr = new Array
			(standardMinionAttack, null, standardWeaponAttack,
				aprilByeMinionAttack, null, aprilByeWeaponAttack,
				wildMinionAttack, null, wildWeaponAttack);

			healthArr = new Array
			(standardMinionHealth, null, standardWeaponHealth,
				aprilByeMinionHealth, null, aprilByeWeaponHealth,
				wildMinionHealth, null, wildWeaponHealth);

			classArr = new Array
			(standardMinionClass, standardSpellClass, standardWeaponClass,
				aprilByeMinionClass, aprilByeSpellClass, aprilByeWeaponClass,
				wildMinionClass, wildSpellClass, wildWeaponClass);

			rarityArr = new Array
			(standardMinionRarity, standardSpellRarity, standardWeaponRarity,
				aprilByeMinionRarity, aprilByeSpellRarity, aprilByeWeaponRarity,
				wildMinionRarity, wildSpellRarity, wildWeaponRarity);

			costArr = new Array
			(standardMinionCost, standardSpellCost, standardWeaponCost,
				aprilByeMinionCost, aprilByeSpellCost, aprilByeWeaponCost,
				wildMinionCost, wildSpellCost, wildWeaponCost);

			setArr = new Array
			(standardMinionSet, standardSpellSet, standardWeaponSet,
				aprilByeMinionSet, aprilByeSpellSet, aprilByeWeaponSet,
				wildMinionSet, wildSpellSet, wildWeaponSet);

			$("#infMode").css("display", "none");
			$("#testMode").css("display", "none");

			$("#mainDiv > p:nth-child(2)").click(function() {
				win = 0;
				game = 0;
				$("#mainDiv > p").css("display", "none");
				gameMode = 0;

				playingCardNameList = new Array();
				playingCardIdList = new Array();
				playingCardIdxList = new Array();

				playingCardIdx = 0;

				$("#mainDiv").fadeOut(1200, function() {
					win = 0;
					game = 0;
					$("#infMode").fadeIn(1200);
				});
			});

			$("#mainDiv > p:last").click(function() {
				win = 0;
				game = 0;
				$("#mainDiv > p").css("display", "none");
				gameMode = 1;

				playingCardNameList = new Array();
				playingCardIdList = new Array();
				playingCardIdxList = new Array();

				playingCardIdx = 0;

				$("#mainDiv").fadeOut(1200, function() {
					$("#testMode > p").css("color", "#3668a7").css("background-color", "#fff");
					$("#testMode").fadeIn(1200);
				});
			});

			$("#infMode > p:not(.startBtn)").toggle(function() {
				$(this).css("background-color", "#3668a7");
				$(this).css("color", "#fff");
				infModeRange[($("p").index(this)) - 2] = 1;
			}, function() {
				$(this).css("background-color", "#fff");
				$(this).css("color", "#3668a7");
				infModeRange[($("p").index(this)) - 2] = 0;
			});

			$("#infMode .startBtn").click(function() {
				isGaming = true;

				playingCardNameList = new Array();
				playingCardIdList = new Array();
				playingCardIdxList = new Array();

				playingCardIdx = 0;

				game++;

				$("#gameDiv #mask").css("display", "block");
				$("#gameDiv #selectBtnDiv").css("display", "block");

				$("#result1").text("문제 : " + game + "번");
				$("#result2").text("정답 : " + win + " / " + game);

				diff = 0;

				for(var i in infModeRange) {
					if(infModeRange[i] == 1) {
							//////console.log(i);
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
								//////////alert(playingCardIdxList[playingCardIdx]);
								playingCardIdList[playingCardIdx] = idArr[i];
								playingCardIdx++;
							}
						}

						$("#infMode > p").css("display", "none");

						allIndex = 0;

						for(var i in playingCardIdxList) {
							allIndex += playingCardIdxList[i];
						}

						//////alert(allIndex);

						rndIndex = Math.floor(Math.random() * allIndex);

						rndArr = 0;
						temp = 0;

						for(rndArr in playingCardIdxList) {
							temp += playingCardIdxList[rndArr];

							if(temp > rndIndex) {
								break;
							}
						}

						rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

						duplicatedName = new Array();
						duplicatedName[0] = playingCardNameList[rndArr][rndCard];

						$("#mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
							playingCardIdList[rndArr][rndCard] + ".png)");

						answerIdx = Math.floor(Math.random() * 5) + 1;

						var dIdx = 0;

						$("#selectBtnDiv .selectBtn:nth-child(" + answerIdx + ")").text(playingCardNameList[rndArr][rndCard]);

						duplicatedName[5] = playingCardNameList[rndArr][rndCard];

						for(var i=0; i<5; i++) {
							if(i == answerIdx-1) {
								continue;
							}

							rndIndex2 = Math.floor(Math.random() * allIndex);

							rndArr2 = 0;
							temp2 = 0;

							for(rndArr2 in playingCardIdxList) {
								temp2 += playingCardIdxList[rndArr];

								if(temp2 > rndIndex2) {
									break;
								}
							}

							rndCard2 = Math.floor(Math.random() * playingCardIdxList[rndArr2]);
							isDuplicated = false;

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

							name = playingCardNameList[rndArr2][rndCard2];
							duplicatedName[dIdx++] = name;

							$("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")").text(name);
						}

						$("#selectBtnDiv .selectBtn").css("display", "inline-block");

						$("#infMode").fadeOut(1200, function() {
							$("#gameDiv").fadeIn(1200);
						});
					}
				});

			$("#selectBtnDiv p").click(function() {
				//alert($("p").index(this));
				if(isGaming == true) {
					$("#selectBtnDiv p").attr("disabled", true);
					$("#mask").css("background-size", "200px 300px");
					$("#mask").css("background-position", "50px");
					$("#mask").css("background-position-y", "0px");
					$("#gameDiv #selectBtnDiv .selectBtn:not(:nth-child(" + answerIdx + "))").fadeOut(1200, function() {
						$("#gameDiv #selectBtn2, #gameDiv #selectBtn3").css("display", "inline-block");
					});

					if((($("p").index(this)) - 20) == answerIdx) {
						win++;
						$("#answer").text("정답입니다!");
					} else {
						$("#answer").text("오답입니다!");
					}

					$("#answer").css("opacity", "100");

					$("#result2").text("정답 : " + win + " / " + game);

					isGaming = false;
				}
			});

			$("#gameDiv #selectBtn2").click(function() {
				$("#gameDiv").fadeOut(1200, function() {
					game = 0;
					win = 0;

					$("#mask").css("background-size", "1500px 2200px");
					$("#mask").css("background-position", "-580px");
					$("#mask").css("background-position-y", "-580px");

					$("#mainDiv > p, #infMode > p, #testMode > p").css("display", "inline-block")

					$("#gameDiv #selectBtn2, #gameDiv .selectBtn:last").css("display", "none");

					$("#answer").css("opacity", "0");
					$("#answer, #result1, #result2").css("display", "block");

					$("#mainDiv").fadeIn(1200);
				});
			});

			$("#gameDiv .selectBtn:last").click(function() {
				isGaming = true;

				game++;
				$("#result1").text("문제 : " + game + "번");

				$("#mask").css("background-size", "1500px 2200px");
				$("#mask").css("background-position", "-580px");
				$("#mask").css("background-position-y", "-580px");

				$("#gameDiv .selectBtn:last, #gameDiv #selectBtn2").css("display", "none");
				$("#answer").css("opacity", "0");

				$("#selectBtnDiv .selectBtn").css("display", "inline-block");
				allIndex = 0;

				for(var i in playingCardIdxList) {
					allIndex += playingCardIdxList[i];
				}

				rndIndex = Math.floor(Math.random() * allIndex);

				rndArr = 0;
				temp = 0;

				for(rndArr in playingCardIdxList) {
					temp += playingCardIdxList[rndArr];

					if(temp > rndIndex) {
						break;
					}
				}

				rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

				duplicatedName = new Array();
				duplicatedName[0] = playingCardNameList[rndArr][rndCard];

				$("#mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
					playingCardIdList[rndArr][rndCard] + ".png)");

				answerIdx = Math.floor(Math.random() * 5) + 1;

				dIdx = 0;

				$("#selectBtnDiv .selectBtn:nth-child(" + answerIdx + ")").text(playingCardNameList[rndArr][rndCard]);

				duplicatedName[5] = playingCardNameList[rndArr][rndCard];

				for(var i=0; i<5; i++) {
					if(i == answerIdx-1) {
						continue;
					}

					rndIndex2 = Math.floor(Math.random() * allIndex);

					rndArr2 = 0;
					temp2 = 0;

					for(rndArr2 in playingCardIdxList) {
						temp2 += playingCardIdxList[rndArr];

						if(temp2 > rndIndex2) {
							break;
						}
					}

					rndCard2 = Math.floor(Math.random() * playingCardIdxList[rndArr2]);
					isDuplicated = false;

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

					name = playingCardNameList[rndArr2][rndCard2];
					duplicatedName[dIdx++] = name;

					$("#selectBtnDiv .selectBtn:nth-child(" + (i+1) + ")").text(name);
				}
			});

			$("#testMode p").click(function() {
				//alert($("p").index(this));
				game++;
				$("#gameDiv3 input").val("");
				$("#gameDiv2 .selectBtn:not(:#submitBtn)").css("display", "none");
				$("#gameDiv3 .selectBtn:not(:#submitBtn)").css("display", "none");
				$("#gameDiv2 .testAnswer").css("opacity", "0");
				$("#gameDiv3 .testAnswer").css("opacity", "0");
				$("result1").text("문제 : " + game + "번");
				if(($("p").index(this)) == 13) {
					testModeDifficulty = 0;
					playingCardNameList = new Array(nameArr[0], nameArr[1], nameArr[2]);
					playingCardIdxList = new Array(idxArr[0], idxArr[1], idxArr[2]);
					playingCardIdList = new Array(idArr[0], idArr[1], idArr[2]);
				} else if(($("p").index(this)) == 14) {
					testModeDifficulty = 1;
					playingCardNameList = new Array(nameArr[0], nameArr[1], nameArr[2], nameArr[3], nameArr[4], nameArr[5]);
					playingCardIdxList = new Array(idxArr[0], idxArr[1], idxArr[2], idxArr[3], idxArr[4], idxArr[5]);
					playingCardIdList = new Array(idArr[0], idArr[1], idArr[2], idArr[3], idArr[4], idArr[5]);
				} else if(($("p").index(this)) == 15) {
					testModeDifficulty = 2;
					playingCardNameList = nameArr;
					playingCardIdxList = idxArr;
					playingCardIdList = idArr;
				} else {
					testModeDifficulty = 3;
					playingCardNameList = nameArr;
					playingCardIdxList = idxArr;
					playingCardIdList = idArr;
				}

				$(this).css("background-color", "#3668a7");
				$(this).css("color", "#fff");
				$("#testMode > p").css("display", "none");
				allIndex = 0;

				for(var i in playingCardIdxList) {
					allIndex += playingCardIdxList[i];
				}

				rndIndex = Math.floor(Math.random() * allIndex);

				rndArr = 0;
				temp = 0;

				for(rndArr in playingCardIdxList) {
					temp += playingCardIdxList[rndArr];

					if(temp > rndIndex) {
						break;
					}
				}

				if(rndArr == 1 || rndArr == 4 || rndArr == 7) {
					isHaveAttack = false;
				} else {
					isHaveAttack = true;
				}

				rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

				duplicatedName = new Array();
				duplicatedName[0] = playingCardNameList[rndArr][rndCard];

				if(($("p").index(this)) <= 15) {
					$("#gameDiv2 #mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
						playingCardIdList[rndArr][rndCard] + ".png)");

					$("#testMode").fadeOut(1200, function() {
						$("#gameDiv2 #mask").css("background-size", "1500px 2200px");
						$("#gameDiv2 #mask").css("background-position", "-580px");
						$("#gameDiv2 #mask").css("background-position-y", "-580px");
						$("#gameDiv2 #mask").css("display", "block");

						$("#gameDiv2").fadeIn(1200);
					});
				} else {
					win = 0;

					$("#gameDiv3 input").attr("disabled", false);
					$("#gameDiv3 #result1").text("문제 : 1번");
					$("#gameDiv3 #result2").text("정답 : 0 / 1");
					$("#gameDiv3 #resultBtn").css("display", "none");
					$("#gameDiv3 #selectBtn4, #gameDiv3 #selectBtn5").css("display", "none");
					$("#gameDiv3 #submitBtn").css("display", "inline-block");
					$("#gameDiv3 #mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
						playingCardIdList[rndArr][rndCard] + ".png)");

					$("#testMode").fadeOut(1200, function() {
						$("#gameDiv3 #mask").css("background-size", "1500px 2200px");
						$("#gameDiv3 #mask").css("background-position", "-580px");
						$("#gameDiv3 #mask").css("background-position-y", "-580px");

						$("#gameDiv3 input").css("display", "inline-block");
						$("#gameDiv3 label").css("display", "inline-block");

						if(!isHaveAttack) {
							$(".haveAttack").css("display", "none");
						}

						$("#gameDiv3 #mask").css("display", "block");

						$("#gameDiv3").fadeIn(1200);
					});
				}
			});

			$("#gameDiv2 #submitBtn").click(function() {
				$("#gameDiv2 #mask").css("background-size", "200px 300px");
				$("#gameDiv2 #mask").css("background-position", "50px");
				$("#gameDiv2 #mask").css("background-position-y", "0px");

				$("#gameDiv2 input").attr("disabled", true);
				$("#gameDiv2 #selectBtn4, #gameDiv2 #selectBtn5").css("display", "inline-block");
				$("#gameDiv2 #submitBtn").css("display", "none");

				$("#gameDiv2 .testAnswer:nth-child(3)").text(playingCardNameList[rndArr][rndCard]);

				if((playingCardNameList[rndArr][rndCard].replace(/ /g, '').replace(/!/g, '').replace(/:/g, '')) == ($("#gameDiv2 input").val().replace(/ /g, '').replace(/!/g, '').replace(/:/g, ''))) {
					$("#gameDiv2 #answer:nth-child(2)").text("정답입니다!");
					win++;
				} else {
					$("#gameDiv2 #answer:nth-child(2)").text("오답입니다!");
				}

				$("#gameDiv2 #result2").text("정답 : " + win + " / " + game);

				$("#gameDiv2 .testAnswer").css("opacity", "100");

				if(game == 30) {
					$("#gameDiv2 .selectBtn").css("display", "none");
					$("#gameDiv2 #resultBtn").css("display", "inline-block");
				}
			});

			$("#gameDiv3 #submitBtn").click(function() {
				$("#gameDiv3 #mask").css("background-size", "200px 300px");
				$("#gameDiv3 #mask").css("background-position", "50px");
				$("#gameDiv3 #mask").css("background-position-y", "0px");

				$("#gameDiv3 input").attr("disabled", true);
				$("#gameDiv3 #selectBtn4, #gameDiv3 #selectBtn5").css("display", "inline-block");
				$("#gameDiv3 #submitBtn").css("display", "none");

				var rarityKor;
				var classKor;
				var setKor;

				switch(rarityArr[rndArr][rndCard]) {
					case "FREE":
					rarityKor = "기본";
					break;
					case "COMMON":
					rarityKor = "일반";
					break;
					case "RARE":
					rarityKor = "희귀";
					break;
					case "EPIC":
					rarityKor = "영웅";
					break;
					case "LEGENDARY":
					rarityKor = "전설";
					break;
				}

				switch(classArr[rndArr][rndCard]) {
					case "MAGE":
					classKor = "마법사";
					break;
					case "HUNTER":
					classKor = "사냥꾼";
					break;
					case "WARRIOR":
					classKor = "전사";
					break;
					case "SHAMAN":
					classKor = "주술사";
					break;
					case "PALADIN":
					classKor = "성기사";
					break;
					case "PRIEST":
					classKor = "사제";
					break;
					case "DRUID":
					classKor = "드루이드";
					break;
					case "ROGUE":
					classKor = "도적";
					break;
					case "WARLOCK":
					classKor = "흑마법사";
					break;
					case "NEUTRAL":
					classKor = "중립 / 가젯잔 조직";
					break;
				}

				switch(setArr[rndArr][rndCard]) {
					case "EXPERT1":
					setKor = "오리지널";
					break;
					case "CORE":
					setKor = "기본";
					break;
					case "NAXX":
					setKor = "낙스라마스";
					break;
					case "GVG":
					setKor = "고블린 대 노움";
					break;
					case "BRM":
					setKor = "검은 바위 산";
					break;
					case "TGT":
					setKor = "대마상시합";
					break;
					case "LOE":
					setKor = "탐험가 연맹";
					break;
					case "OG":
					setKor = "고대신의 속삭임";
					break;
					case "KARA":
					setKor = "카라잔";
					break;
					case "GANGS":
					setKor = "가젯잔";
					break;
					case "REWARD":
					setKor = "보상";
					break;
					case "PROMO":
					setKor = "프로모션";
					break;
				}

				if(isHaveAttack) {
					$("#gameDiv3 .testAnswer:nth-child(3)").html(costArr[rndArr][rndCard] + "코스트 " + attackArr[rndArr][rndCard] + " / " +
						healthArr[rndArr][rndCard] + " " + nameArr[rndArr][rndCard] + "<br/>카드 등급 : " + rarityKor + ",  직업 : " + classKor + ",  소속 : " + setKor);
				} else {
					$("#gameDiv3 .testAnswer:nth-child(3)").html(costArr[rndArr][rndCard] + "코스트 " + nameArr[rndArr][rndCard] + "<br/>카드 등급 : " + rarityKor + ",  직업 : " + classKor + ",  소속 : " + setKor);
				}


				//console.log(rndArr);
				//console.log(rndCard);

				if((isHaveAttack &&
					(playingCardNameList[rndArr][rndCard].replace(/ /g, '').replace(/!/g, '').replace(/:/g, '') ==
						$("#gameDiv3 #name").val().replace(/ /g, '').replace(/!/g, '').replace(/:/g, '')) &&
					(costArr[rndArr][rndCard] == Number($("#gameDiv3 #cost").val())) &&
					(attackArr[rndArr][rndCard] == Number($("#gameDiv3 #attack").val())) &&
					(healthArr[rndArr][rndCard] == Number($("#gameDiv3 #health").val())) &&
					(rarityArr[rndArr][rndCard] == $("#gameDiv3 #rarity").val()) &&
					(classArr[rndArr][rndCard] == $("#gameDiv3 #class").val()) &&
					(setArr[rndArr][rndCard] == $("#gameDiv3 #set").val())) ||
					((isHaveAttack == false) &&
						(playingCardNameList[rndArr][rndCard].replace(/ /g, '').replace(/!/g, '').replace(/:/g, '') ==
							$("#gameDiv3 #name").val().replace(/ /g, '').replace(/!/g, '').replace(/:/g, '')) &&
						(costArr[rndArr][rndCard] == Number($("#gameDiv3 #cost").val())) &&
						(rarityArr[rndArr][rndCard] == $("#gameDiv3 #rarity").val()) &&
						(classArr[rndArr][rndCard] == $("#gameDiv3 #class").val()) &&
						(setArr[rndArr][rndCard] == $("#gameDiv3 #set").val()))) {
					$("#gameDiv3 #answer:nth-child(2)").text("정답입니다!");
					win++;
				} else {
					$("#gameDiv3 #answer:nth-child(2)").text("오답입니다!");
				}

				$("#gameDiv3 #result2").text("정답 : " + win + " / " + game);

				$("#gameDiv3 .testAnswer").css("opacity", "100");

				if(game == 30) {
					$("#gameDiv3 .selectBtn").css("display", "none");
					$("#gameDiv3 #resultBtn").css("display", "inline-block");
				}
			});

		$("#gameDiv2 #resultBtn").click(function() {
						////alert(win);
						if(((win <= 10) && (testModeDifficulty == 0)) || ((win <= 5) && (testModeDifficulty == 1)) || ((win <= 3) && (testModeDifficulty == 2))) {
							rank = 10;
						} else if(((win <= 20) && (testModeDifficulty == 0)) || ((win <= 10) && (testModeDifficulty == 1)) || ((win <= 6) && (testModeDifficulty == 2))) {
							rank = 9;
						} else if(((win <= 30) && (testModeDifficulty == 0)) || ((win <= 15) && (testModeDifficulty == 1)) || ((win <= 9) && (testModeDifficulty == 2))) {
							rank = 8;
						} else if(((win <= 20) && (testModeDifficulty == 1)) || ((win <= 12) && (testModeDifficulty == 2))) {
							rank = 7;
						} else if(((win <= 25) && (testModeDifficulty == 1)) || ((win <= 15) && (testModeDifficulty == 2))) {
							rank = 6;
						} else if(((win <= 30) && (testModeDifficulty == 1)) || ((win <= 18) && (testModeDifficulty == 2))) {
							rank = 5;
						} else if(win <= 21 && testModeDifficulty == 2) {
							rank = 4;
						} else if(win <= 25 && testModeDifficulty == 2) {
							rank = 3;
						} else if(win <= 29 && testModeDifficulty == 2) {
							rank = 2;
						} else {
							rank = 1;
						}

						$("#resultDiv strong").text(rankName[rank-1]);
						$("#resultDiv img").attr("src", "rank" + rank + ".png");
						$("#resultAnswer").text("정답 수 : " + win);
						$("#gameDiv2").fadeOut(1200);
						$("#resultDiv").fadeIn(2400);
						$("#resultDiv .result:first").fadeIn(3600);
						$("#resultDiv img").fadeIn(4800);
						$("#resultDiv strong").fadeIn(6000);
						$("#resultDiv .result").fadeIn(6000);
						$("#resultAnswer").fadeIn(7200);
						$("#resultDiv img").css("cursor", "pointer");
					});

		$("#gameDiv3 #resultBtn").click(function() {
			var isGod = false;
			if(win < 30) {
				rank = 10;
			} else {
				isGod = true;
			}

			if(isGod == false) {
				$("#resultDiv2 strong").text(rankName[rank-1]);
				$("#resultDiv2 img").attr("src", "rank" + rank + ".png");
				$("#resultDiv2 #resultAnswer").text("정답 수 : " + win);
				$("#gameDiv3").fadeOut(1200);
				$("#resultDiv2").fadeIn(2400);
				$("#resultDiv2 .result:first").fadeIn(3600);
				$("#resultDiv2 img").fadeIn(4800);
				$("#resultDiv2 strong").fadeIn(6000);
				$("#resultDiv2 .result").fadeIn(6000);
				$("#resultDiv2 resultAnswer").fadeIn(7200);
				$("#resultDiv2 img").css("cursor", "pointer");
			} else {
				$("#gameDiv3").css("display", "none");
				$("#gameDiv4 *").css("display", "block");
				$("#gameDiv4").fadeIn(1200);
			}
		});

		$("#resultDiv img").click(function() {
			$("#resultDiv").fadeOut(1200, function() {
				win = 0;
				game = 0;
				$("#gameDiv2 input").attr("disabled", false).val("");
				$("#resultDiv *").css("display", "none");
				$("#gameDiv2 #resultBtn").css("display", "none");
				$("#gameDiv2 #submitBtn").css("display", "inline-block");
				$("#gameDiv2 #result1").text("문제 : 1번");
				$("#gameDiv2 #result2").text("정답 : 0 / 0");
				$("#mainDiv > p, #infMode > p, #testMode > p").css("display", "inline-block");
				isAnimationDone = false;
				$("#mainDiv").fadeIn(1200);
			});
		});

		$("#resultDiv2 img").click(function() {
			$("#resultDiv2").fadeOut(1200, function() {
				win = 0;
				game = 0;
				$("#gameDiv3 input").attr("disabled", false).val("");
				$("#resultDiv2 *").css("display", "none");
				$("#gameDiv3 #resultBtn").css("display", "none");
				$("#gameDiv3 #submitBtn").css("display", "inline-block");
				$("#gameDiv3 #result1").text("문제 : 1번");
				$("#gameDiv3 #result2").text("정답 : 0 / 0");
				$("#mainDiv > p, #infMode > p, #testMode > p").css("display", "inline-block");
				isAnimationDone = false;
				$("#mainDiv").fadeIn(1200);
			});
		});

		$("#gameDiv2 #selectBtn4").click(function() {
			$("#gameDiv2").fadeOut(1200, function() {
				win = 0;
				game = 0;
				$("#gameDiv2 input").attr("disabled", false).val("");
				$("#gameDiv2 #selectBtn4, #gameDiv2 #selectBtn5").css("display", "none");
				$("#gameDiv2 #submitBtn").css("display", "inline-block");
				$("#gameDiv2 #result1").text("문제 : 1번");
				$("#gameDiv2 #result2").text("정답 : 0 / 0");
				$("#mainDiv > p, #infMode > p, #testMode > p").css("display", "inline-block");
				$("#mainDiv").fadeIn(1200);
			});
		});

		$("#gameDiv3 #selectBtn4").click(function() {
			$("#gameDiv3").fadeOut(1200, function() {
				win = 0;
				game = 0;
				$("#gameDiv3 input").attr("disabled", false).val("");
				$("#gameDiv3 #selectBtn4, #gameDiv3 #selectBtn5").css("display", "none");
				$("#gameDiv3 #submitBtn").css("display", "inline-block");
				$("#gameDiv3 #result1").text("문제 : 1번");
				$("#gameDiv3 #result2").text("정답 : 0 / 0");
				$("#mainDiv > p, #infMode > p, #testMode > p").css("display", "inline-block");
				$("#mainDiv").fadeIn(1200);
			})
		})

		$("#gameDiv2 #selectBtn5").click(function() {
			$("#gameDiv2 #mask").css("background-size", "1500px 2200px");
			$("#gameDiv2 #mask").css("background-position", "-580px");
			$("#gameDiv2 #mask").css("background-position-y", "-580px");

			game++;

			$("#gameDiv2 input").val("");

			$("#gameDiv2 #result1").text("문제 : " + game + "번");

			$("#gameDiv2 .testAnswer").css("opacity", "0");

			$("#gameDiv2 input").attr("disabled", false);

			$("#gameDiv2 #selectBtn4, #gameDiv2 #selectBtn5").css("display", "none");

			$("#gameDiv2 #submitBtn").css("display", "inline-block");

			rndIndex = Math.floor(Math.random() * allIndex);

			rndArr = 0;
			temp = 0;

			for(rndArr in playingCardIdxList) {
				temp += playingCardIdxList[rndArr];

				if(temp > rndIndex) {
					break;
				}
			}

			$(".testAnswer").css("opacity", "0");

			rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

			duplicatedName = new Array();
			duplicatedName[0] = playingCardNameList[rndArr][rndCard];

			$("#gameDiv2 #mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
				playingCardIdList[rndArr][rndCard] + ".png)");
		});

		$("#gameDiv3 #selectBtn5").click(function() {
			$("#gameDiv3 #mask").css("background-size", "1500px 2200px");
			$("#gameDiv3 #mask").css("background-position", "-580px");
			$("#gameDiv3 #mask").css("background-position-y", "-580px");

			game++;

			$("#gameDiv3 input").val("").css("display", "inline-block").attr("disabled", false);

			$("#gameDiv3 #result1").text("문제 : " + game + "번");

			$("#gameDiv3 .testAnswer").css("opacity", "0");

			$("#gameDiv3 label").css("display", "inline-block");

			$("#gameDiv3 #selectBtn4, #gameDiv3 #selectBtn5").css("display", "none");

			$("#gameDiv3 #submitBtn").css("display", "inline-block");

			rndIndex = Math.floor(Math.random() * allIndex);

			rndArr = 0;
			temp = 0;

			for(rndArr in playingCardIdxList) {
				temp += playingCardIdxList[rndArr];

				if(temp > rndIndex) {
					break;
				}
			}

			$(".testAnswer").css("opacity", "0");

			rndCard = Math.floor(Math.random() * playingCardIdxList[rndArr]);

			duplicatedName = new Array();
			duplicatedName[0] = playingCardNameList[rndArr][rndCard];

			if(rndArr == 1 || rndArr == 4 || rndArr == 7) {
				isHaveAttack = false;
			} else {
				isHaveAttack = true;
			}

			$("#gameDiv3 #mask").css("background-image", "url(http://media.services.zam.com/v1/media/byName/hs/cards/enus/" +
				playingCardIdList[rndArr][rndCard] + ".png)");

			if(!isHaveAttack) {
				$(".haveAttack").css("display", "none");
			}
		});

		$("#gameDiv2 #selectBtn4").click(function() {
			$("#gameDiv2").fadeOut(1200, function() {
				$("#mainDiv").fadeIn(1200);
			});
		});

		$("#gameDiv4 .selectBtn").click(function() {
			game = 0;
			$("#gameDiv4 h2").css("display", "none");
			$("#gameDiv4 .selectBtn").css("display", "none");

			$("#field2 img").css("background-color", "red");

			$("#field2 img").fadeOut(2400, function() {
				$("#field1 img").css("background-color", "red");

				var rndDamage = Math.floor(Math.random() * 4) + 1;
				//console.log(rndDamage+"@");
				//alert(rndDamage);

				$("#field1 img").css("background-color", "red");
				$("#field1 img").fadeOut(3600, function() {
					$("#field1 img").attr("src", "damage" + rndDamage + ".png").css("background-color", "transparent").css("width", "50%");
					$("#field1 img").fadeIn(3600, function() {
						if(rndDamage == 4) {
							$("#gameDiv4").fadeOut(3600, function() {
								$("#field1 img").css("width", "173px");
								$("#finalResult1").fadeIn(3600);
							});
						} else {
							$("#gameDiv4").fadeOut(3600, function() {
								$("#field1 img").css("width", "173px");
								$("#finalResult2").fadeIn(3600);
							});
						}
					});
				});
			});
		});

		$("#imgDiv").click(function() {
			$("#gameDiv4 h2").css("display", "block");
			$("#gameDiv4 .selectBtn").css("display", "block");
			$("#field1 img").attr("src", "guldan.png");
			$("#field2 img").css("display", "block");
			$("#gameDiv4").css("display", "none");

			$("#finalResult1").fadeOut(2400, function() {
				$("#mainDiv p, #infMode p, #testMode p").css("display", "inline-block");
				$("#mainDiv").fadeIn(2400);
			})
		});

		$("#finalResult2 img").click(function() {
			$("#gameDiv4 h2").css("display", "block");
			$("#gameDiv4 .selectBtn").css("display", "block");
			$("#field1 img").attr("src", "guldan.png");
			$("#field2 img").css("display", "block");
			$("#gameDiv4").css("display", "none");

			$("#mainDiv p, #infMode p, #testMode p").css("display", "inline-block");

			$("#finalResult2").fadeOut(2400, function() {
				$("#mainDiv").fadeIn(2400);
			})
		});
	});
});