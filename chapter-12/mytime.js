(function() {
    "use strict";
    const userIds = document.querySelector("#script-mytime").dataset["users"].replace(/\s/g, "");
    const timeList = new Array(48).fill(0).map((x,i)=>(i / 2 + ":00").replace(".5:00", ":30"));
    let layer = document.querySelector(".mytime-layer");
    if (layer) {
        return layer.remove()
    }
    appendLayer();
    callAPI();
    function callAPI(userIds) {
        const url = `localhost/mytime/api/list/working-time?userIds=${userIds}`;
        fetch("https://api.randomuser.me/" + url)
        .then(r=>r.json())
        .then(data=> {
            console.log(data);
        })
        .catch(e=>{
            alert("ERROR! CHECK CONSOLE LOG!");
            console.log(e)
        })
    }
    function render(raw) {
        const data = raw.result;
        const currentTime = getCurrentTime();
        let html = [];
        data.forEach(d=>{
            const workingTime = [];
            d.workingTimeList.forEach(wt=>{
                const st = wt.startTime.replace(/^0/, "");
                const et = wt.endTime.replace(/^0/, "");
                let on = false;
                timeList.forEach(t=>{
                    if (t === st) {
                        on = true
                    }
                    if (t === et) {
                        on = false
                    }
                    if (on) {
                        workingTime.push(t)
                    }
                }
                )
            }
            );
            let h = `<tr><td class="id"><a href="${d.url}" target="_blank">${d.userId}</a></td>`;
            timeList.forEach(t=>{
                let className = workingTime.includes(t) ? "on" : "";
                className += currentTime === t ? " now" : "";
                h += `<td class="${className}"></td>`
            }
            );
            html.push(h + "</tr>")
        }
        );
        html = html.map(line=>line.indexOf("on now") > -1 ? line.replace('td class="id"', 'td class="id online"') : line).join("");
        layer.querySelector("table tbody").innerHTML = html;
        layerOn()
    }
    function appendLayer() {
        appendStyle();
        layer = document.createElement("div");
        layer.setAttribute("class", "mytime-layer");
        layer.innerHTML = '<table><thead><tr><th>ID</th><th colspan="2">00</th><th colspan="2">01</th><th colspan="2">02</th><th colspan="2">03</th><th colspan="2">04</th><th colspan="2">05</th><th colspan="2">06</th><th colspan="2">07</th><th colspan="2">08</th><th colspan="2">09</th><th colspan="2">10</th><th colspan="2">11</th><th colspan="2">12</th><th colspan="2">13</th><th colspan="2">14</th><th colspan="2">15</th><th colspan="2">16</th><th colspan="2">17</th><th colspan="2">18</th><th colspan="2">19</th><th colspan="2">20</th><th colspan="2">21</th><th colspan="2">22</th><th colspan="2">23</th></tr></thead><tbody></tbody><tfoot><tr class="right"><td colspan="48"><a href="#" target="_blank">✌️</a></td></tr></tfoot></table>';
        document.body.appendChild(layer)
    }
    function appendStyle() {
        const style = document.createElement("style");
        style.innerHTML = `\n.mytime-layer { background-color: #000; position: fixed; top:-3000px; left:0; width: 100%; height: auto; padding:10px; margin: 0; z-index: 99999; color: #fff; font-family: sans-serif; visibility: hidden; }\n.mytime-layer a, .mytime-layer td, .mytime-layer th { color: #fff; }\n.mytime-layer table { width: 100%; }\n.mytime-layer table th { background-color: #444; text-align: left; font-family: monospace; }\n.mytime-layer table td { text-align: left; border-left:1px solid #666; font-family: monospace; }\n.mytime-layer table td:nth-child(1) { border: none; padding-left: 5px; }\n.mytime-layer table tr:nth-child(even) { background: #000; }\n.mytime-layer table tr:nth-child(odd) { background: #222; }\n.mytime-layer table tr:hover { background-color: crimson; }\n.mytime-layer table td.on { background-color: #aaa;}\n.mytime-layer table td.on.now { background-color: crimson; }\n.mytime-layer table td.now { background-color: #444; }\n.mytime-layer table td.id a { border-left: 10px solid transparent; padding-left: 3px;}\n.mytime-layer table td.id.online a { border-left:10px solid chartreuse; }\n.mytime-layer.on { transition: top .4s ease-in-out; visibility: visible; top: 0 !important;}\n.mytime-layer table tfoot tr td { text-align: right; padding-top: 5px; }\n.mytime-layer table tfoot tr { background-color: transparent !important; }\n.mytime-layer table tfoot tr:hover { background-color: transparent; }\n`;
        document.querySelector("head").appendChild(style)
    }
    function layerOn() {
        layer.style.top = `${layer.scrollHeight * -1}px`;
        window.requestAnimationFrame(()=>{
            layer.classList.add("on")
        }
        )
    }
    function getCurrentTime() {
        const NOW = new Date;
        const minutes = NOW.getMinutes() >= 30 ? "30" : "00";
        return `${NOW.getHours()}:${minutes}`
    }
}
)();
