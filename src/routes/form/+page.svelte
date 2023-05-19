<script lang="ts">
</script>

<div class="container flex justify-center mx-auto flex-col">
	<form action="" method="POST">
		<h2 class="h2">Personal Info</h2>

		<label class="label" for="age">
			<span>Age</span>
		</label>
		<input type="number" id="age" name="age" class="input" placeholder="20" />

		<label class="label" for="civilStatus">Civil Status</label>
		<select class="select" name="civilStatus" id="civilStatus">
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

		<label class="label" for="currentIncome">
			<span>Current Income</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<i class="fa-solid fa-dollar-sign" />
				</div>
				<input
					class="input"
					type="number"
					id="currentIncome"
					name="currentIncome"
					placeholder="Monthly Income"
				/>
				<!-- <select name="currency" id="currency" class="select">
					<option value="USD">USD</option>
					<option value="DOP">DOP</option>
				</select> -->
			</div>
		</label>

		<label class="label" for="currentSavings"
			><span>Current Savings</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<i class="fa-solid fa-dollar-sign" />
				</div>
				<input
					class="input"
					type="number"
					id="currentSavings"
					name="currentSavings"
					placeholder="Total Savings"
				/>
				<!-- <select name="currency" id="currency" class="select">
					<option value="USD">USD</option>
					<option value="DOP">DOP</option>
				</select> -->
			</div>
		</label>

		<h2 class="h2">Retirement Information</h2>

		<label class="label" for="retirementSpending"
			><span>Retirement Spending</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<i class="fa-solid fa-dollar-sign" />
				</div>
				<input
					class="input"
					type="number"
					id="retirementSpending"
					name="retirementSpending"
					placeholder="Monthly Retirement Spending"
				/>
				<!-- <select name="currency" id="currency" class="select">
					<option value="USD">USD</option>
					<option value="DOP">DOP</option>
				</select> -->
			</div>
		</label>

		<label class="label" for="retirementAge">Retirement Age</label>
		<input
			class="input"
			type="number"
			id="retirementAge"
			name="retirementAge"
			placeholder="65"
		/>

		<label class="label" for="lifeExpectancy">Life Expectancy</label>
		<input
			class="input"
			type="number"
			id="lifeExpectancy"
			name="lifeExpectancy"
			placeholder="95"
		/>

		<br />

		<button type="submit" class="btn variant-filled">Submit</button>
	</form>
</div>
