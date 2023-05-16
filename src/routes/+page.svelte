<script lang="ts">

</script>

<div class="container flex justify-center mx-auto">
	<form action="" method="POST">
		<h2>Personal Info</h2>

		<label for="age">Age</label>
		<input type="number" id="age" name="age" />

		<label for="civil-status">Civil Status</label>
		<select name="civil-status" id="civil-status">
			<option value="single">single</option>
			<option value="common-law">Common Law</option>
			<option value="married">Married</option>
			<option value="divorced">Divorced</option>
		</select>

		<label for="education">Education</label>
		<select name="education" id="education">
			<option value="high-school">High School Diploma</option>
			<option value="bachelor">Bachelor Degree</option>
			<option value="master">Master Degree</option>
			<option value="phd">PhD</option>
		</select>

		<h2>Financial Information</h2>

		<label for="current-income">Current Income</label>
		<input type="number" id="current-income" name="current-income" />

		<label for="current-savings">Current Income</label>
		<input type="number" id="current-savings" name="current-savings" />

		<label for="investor-experience">Investor Experience</label>
		<input type="number" id="investor-experience" name="investor-experience" />

		<label for="financial-goals">Investor Experience</label>
		<input type="number" id="financial-goals" name="financial-goals" />

		<br>

		<div class="items-center">
			<button type="submit" class="btn variant-filled">Submit</button>
		</div>
	</form>
</div>
