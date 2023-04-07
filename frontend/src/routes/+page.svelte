<script lang="ts">
    import Header from "./Header.svelte";
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    function routeToPage(route: string, replaceState: boolean) {
        goto(`/${route}`, { replaceState }) 
    }

    onMount( function() {
        const ai_response_button = document.getElementsByClassName("AI_response")[0]
        // console.log(ai_response_button.length)
        if (ai_response_button){
            ai_response_button.addEventListener('click', function() {
                console.log("CLICKED ON BUTTON")
                routeToPage("new", false)
            })
        } else {
            console.log("PROBELMAAAAAAAAAAAAAAAAAS")
        }
    })
    

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
        <input name="current-income" type="number">
    </label>
    <br>
    <label>
        Current Savings
        <input name="current-savings" type="number">
    </label>
    <br>
    <label>
        Investor Experience
        <input name="current-experience" type="number">
    </label>
    <br>
    <label>
        Financial Goals
        <input name="financial-goals" type="text">
    </label>

    <br><br>
    
    <button class="AI_response">Submit</button>
</form>