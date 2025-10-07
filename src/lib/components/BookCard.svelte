<script lang="ts">
	interface Book {
		id: string;
		title: string;
		description: string;
		coverGradient?: string;
		coverImage?: string;
	}

	let { book, href = `/catalog#${book.id}` } = $props<{ book: Book; href?: string }>();
</script>

<article class="book-card">
	<a class="book-link" {href} aria-label="Read more about {book.title}">
		{#if book.coverImage}
			<div class="book-cover-image">
				<img src={book.coverImage} alt="{book.title} cover" />
			</div>
		{:else}
			<div
				class="book-cover"
				style={book.coverGradient ? `background: ${book.coverGradient}` : ''}
			>
				{book.title}
			</div>
		{/if}
		<h3 class="book-title">{book.title}</h3>
		<p class="book-description">{book.description}</p>
	</a>
</article>

<style>
	.book-cover-image {
		width: 140px;
		height: 205px;
		margin: 0 auto 1rem;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
	}

	.book-cover-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>