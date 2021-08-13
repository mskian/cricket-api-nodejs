const cheerio = require('cheerio');
const randomUseragent = require('random-useragent');
const axios = require('axios');
const rua = randomUseragent.getRandom();
const matchdata = require('./app.json');

let str = matchdata.match_url;
let live_url = str.replace('www', 'm');

    axios({
        method: 'GET',
        url: live_url,
        headers: {
            'User-Agent': rua
        }
    }).then(function(response) {

        $ = cheerio.load(response.data);

        var title = $("h4.ui-header").text();
        var update = $("div.cbz-ui-status").text();
        var currentscore = $('span.ui-bat-team-scores').text();
        var batsman = $('span.bat-bowl-miniscore').eq(0).text();
        var batsmanrun = $('td[class="cbz-grid-table-fix "]').eq(6).text();
        var ballsfaced = $('span[style="font-weight:normal"]').eq(0).text();
        var fours = $('td[class="cbz-grid-table-fix "]').eq(7).text();
        var sixes = $('td[class="cbz-grid-table-fix "]').eq(8).text();
        var bowler = $('span.bat-bowl-miniscore').eq(2).text();
        var bowlerover = $('td[class="cbz-grid-table-fix "]').eq(21).text();
        var bowlerruns = $('td[class="cbz-grid-table-fix "]').eq(23).text();
        var bowlerwickets = $('td[class="cbz-grid-table-fix "]').eq(24).text();
        var partnership = $("span[style='color:#333']").eq(0).text();
        var recentballs = $("span[style='color:#333']").eq(2).text();
        var lastwicket = $("span[style='color:#333']").eq(1).text();
        var runrate = $("span[class='crr']").eq(0).text();
        var commentary = $("p[class='commtext']").text();

        var livescore = ({
            title: title || "Data Not Found",
            update: update || "Data Not Found",
            current: currentscore || "Data Not Found",
            batsman: batsman || "Data Not Found",
            batsmanrun: batsmanrun || "Data Not Found",
            ballsfaced: ballsfaced || "Data Not Found",
            fours: fours || "Data Not Found",
            sixes: sixes || "Data Not Found",
            bowler: bowler || "Data Not Found",
            bowlerover: bowlerover || "Data Not Found",
            bowlerruns: bowlerruns || "Data Not Found",
            bowlerwickets: bowlerwickets || "Data Not Found",
            partnership: partnership || "Data Not Found",
            recentballs: recentballs || "Data Not Found",
            lastwicket: lastwicket || "Data Not Found",
            runrate: runrate || "Data Not Found",
            commentary: commentary || "Data Not Found"
        });

        console.log("User-Agent:", rua);
        console.log(livescore);

    }).catch(function(error) {
        if (!error.response) {
            console.log('API URL is Missing');
            res.json('API URL is Missing');
        } else {
            console.log('Something Went Wrong - Enter the Correct API URL');
            res.json('Something Went Wrong - Enter the Correct API URL');
        }
    });