$(document).ready(function() {
    let $changeButton = $(".change");
    let $usersContainer = $("#userList ul");
    let $inputAmount = $("input[type='range']");
    let $showAmount = $(".show");

    let maxMembersVisible = 12;
    $showAmount.text(maxMembersVisible + " " + "Membros");

    $inputAmount.on("input", (evt) => {
        maxMembersVisible = evt.target.value;
        $showAmount.text(maxMembersVisible + " " + "Membros");
    });

    $changeButton.click((e) => {
        $.ajax("https://discordapp.com/api/guilds/220904314426753025/widget.json", {
            mothod: "GET",
            success: (data) => {
                let membersLength = data.members.length;

                // Clear the old users init
                $usersContainer.empty();

                let membersID = [];
                for (let i = maxMembersVisible; i > 0; i--) {
                    let userLottery = Math.floor((Math.random() * membersLength) + 0);
                    let user = data.members[userLottery];
                    if (user.avatar !== null) {
                        if (membersID.indexOf(user.id) == -1) {
                            membersID.push(user.id);
                            $usersContainer.append("<img class='discord' title='" + user.username + "' src='" + user.avatar_url + "'>");
                        } else {
                            // this member is already in the array so increment the (i) to do it again
                            i++;
                        }
                    } else {
                        // this member has any picture uploaded so increment the (i) to do it again
                        i++;
                    }
                };
                // remove all items to the array
                membersID.splice(0);
            },
            error: (erro) => {
                console.log(erro);
            }
        });
    });
});
