<script lang="ts">
    import Header from "./Header.svelte";
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
    <button>Submit</button>
</form>