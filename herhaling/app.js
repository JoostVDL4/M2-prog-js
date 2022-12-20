class App {

    runApplication() {
        let button = document.getElementById("reroll-btn");
        button.addEventListener("click", (e) => {
            console.log("hello world");
            let stat1 = this.rollStat();

            let stat2 = this.rollStat();

            let stat3 = this.rollStat();

            let stat4 = this.rollStat();

            let stat5 = this.rollStat();

            let stat6 = this.rollStat();



            console.log(stat1)

            console.log(stat2)

            console.log(stat3)

            console.log(stat4)

            console.log(stat5)

            console.log(stat6)



            let headerel1 = document.getElementById("s1")

            headerel1.innerHTML = "Strength " + stat1



            let headerel2 = document.getElementById("s2")

            headerel2.innerHTML = "Dexterity " + stat2



            let headerel3 = document.getElementById("s3")

            headerel3.innerHTML = "Constitution " + stat3



            let headerel4 = document.getElementById("s4")

            headerel4.innerHTML = "Intelligence " + stat4



            let headerel5 = document.getElementById("s5")

            headerel5.innerHTML = "Wisdom " + stat5



            let headerel6 = document.getElementById("s6")

            headerel6.innerHTML = "Charisma " + stat6

        })

        


            let stat1 = this.rollStat();

            let stat2 = this.rollStat();

            let stat3 = this.rollStat();

            let stat4 = this.rollStat();

            let stat5 = this.rollStat();

            let stat6 = this.rollStat();



            console.log(stat1)

            console.log(stat2)

            console.log(stat3)

            console.log(stat4)

            console.log(stat5)

            console.log(stat6)



            let headerel1 = document.getElementById("s1")

            headerel1.innerHTML = "Strength " + stat1



            let headerel2 = document.getElementById("s2")

            headerel2.innerHTML = "Dexterity " + stat2



            let headerel3 = document.getElementById("s3")

            headerel3.innerHTML = "Constitution " + stat3



            let headerel4 = document.getElementById("s4")

            headerel4.innerHTML = "Intelligence " + stat4



            let headerel5 = document.getElementById("s5")

            headerel5.innerHTML = "Wisdom " + stat5



            let headerel6 = document.getElementById("s6")

            headerel6.innerHTML = "Charisma " + stat6

        }

        rolldice()

        {

            return Math.floor(Math.random() * 7);

        }

        rollStat()

        {

            let d1 = this.rolldice();

            let d2 = this.rolldice();

            let d3 = this.rolldice();

            let d4 = this.rolldice();

            let diceArray = [d1, d2, d3, d4];

            diceArray.sort();

            let som = diceArray[1] + diceArray[2] + diceArray[3]

            return som;

        }


}

let app = new App();

app.runApplication();