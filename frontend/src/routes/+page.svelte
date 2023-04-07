<script lang="js">
    import Header from "./Header.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        const socket_pack_back = new WebSocket(
            "ws://localhost:5173/sent-package-frontend"
        );
        socket_pack_back.addEventListener("open", ()=> {
            console.log("Opened")
        })

        // @ts-ignore
        document.getElementsByClassName("submit-info")[0].style.pointerEvents = "auto";
        document.body.style.bottom = "0px";
        // @ts-ignore
        // document.getElementById("button-1").addEventListener("click", function () {
        //     fetch("./after-submit-procedure");
        // });
    });

    // @ts-ignore
    function myFunction() {
        // @ts-ignore
        socket_pack_back.send(JSON.stringify({ "turn_state": true }))
    }

</script>

<Header />

<form method="post">
    <h3>Personal Info</h3>
    <label>
        Age
        <input name="age" type="number">
    </label>
    <br>
    <label>
        Civil Status
        <select name="civil-status" id="civil-status">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="common-law">Common Law</option>
            <option value="divorced">Divorced</option>
        </select>
    </label>
    <br>
    <label>
        Education
        <select name="education" id="education">
            <option value="high-school">High School Diploma</option>
            <option value="bachelor">Bachelor Degree</option>
            <option value="master">Master Degree</option>
            <option value="phd">PhD</option>
        </select>
    </label>
    <br>

    <h3>Financial Info</h3>

    <label>
        Current Income
        <input type="number">
    </label>
    <br>
    <label>
        Current Savings
        <input type="number">
    </label>
    <br>
    <label>
        Investor Experience
        <input type="number">
    </label>
    <br>
    <label>
        Financial Goals
        <input type="text">
    </label>

    <br><br>
    <!-- <button class="submit-info" id="button-1" onclick="myFunction()">Submit</button> -->
</form>
