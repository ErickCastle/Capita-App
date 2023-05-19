<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="container flex justify-center mx-auto flex-col">
	<form action="" method="POST">
		<h2 class="h2">Personal Info</h2>

		<label class="label" for="age">
			<span>Age</span>
		</label>
		<input type="number" id="age" name="age" class="input" />

		<label class="label" for="civil-status">Civil Status</label>
		<select class="select" name="civil-status" id="civil-status">
			<option value="single">Single</option>
			<option value="common-law">Common Law</option>
			<option value="married">Married</option>
			<option value="divorced">Divorced</option>
		</select>

		<label class="label" for="education">Education</label>
		<select class="select" name="education" id="education">
			<option value="high-school">High School Diploma</option>
			<option value="bachelor">Bachelor Degree</option>
			<option value="master">Master Degree</option>
			<option value="phd">PhD</option>
		</select>

		<h2 class="h2">Financial Information</h2>

		<label class="label" for="current-income">
			<span>Current Income</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">$</div>
				<input
					class="input"
					type="number"
					id="current-income"
					name="current-income"
					placeholder="Monthly Income"
				/>
				<select name="currency" id="currency" class="select">
					<option value="USD">USD</option>
					<option value="DOP">DOP</option>
				</select>
			</div>
		</label>

		<label class="label" for="current-savings">Current Savings</label>
		<input
			class="input"
			type="number"
			id="current-savings"
			name="current-savings"
		/>

		<label class="label" for="investor-experience">Investor Experience</label>
		<input
			class="input"
			type="number"
			id="investor-experience"
			name="investor-experience"
		/>

		<label class="label" for="financial-goals">Investor Experience</label>
		<input
			class="input"
			type="number"
			id="financial-goals"
			name="financial-goals"
		/>

		<br />

		<button type="submit" class="btn variant-filled">Submit</button>
	</form>

	<h3 class="h3">Answer:</h3>
	<textarea class="textarea">{form?.answer}</textarea>
</div>
