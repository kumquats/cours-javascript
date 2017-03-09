<header class="well col-xs-6" >
	<form class="form-horizontal">
		<div class="form-group">
			<label>Où
				<input name="location" type="text" class="form-control" placeholder="Destination, ville, adresse">
			</label>
		</div>
		<div class="form-group">
			<label>Voyageurs
				<input name="guests" type="number" min="1" max="10" class="form-control" value="1">
			</label>
		</div>
		<div class="form-group">
			<label>Du
				<input name="checkin" type="date" class="form-control">
			</label>
			<label>Au
				<input name="checkout" type="date" class="form-control">
			</label>
		</div>
		<div class="form-group">
			<label>Prix minimum
				<input name="price_min" type="range" min="0" max="500" class="form-control" value="0">
			</label>
			<label>Prix maximum
				<input name="price_man" type="range" min="0" max="500" class="form-control" value="500">
			</label>
		</div>
		<div class="form-group">
			<div class="checkbox">
				<label>
					<input type="checkbox"> Internet
				</label>
			</div>
			<div class="checkbox">
				<label>
					<input type="checkbox"> Télévision
				</label>
			</div>
		</div>
		<div class="form-group">
			<div class="errorContainer"></div>
			<button type="submit" class="btn btn-default">Rechercher</button>
		</div>
	</form>
</header>
<section class="col-xs-6">
	<ul class="results">
	</ul>
</section>