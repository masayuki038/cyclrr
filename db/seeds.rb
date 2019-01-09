# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Content.create!([
	{ id: 1, title: "Title 1", content: "Content1"},
	{ id: 2, title: "Title 2", content: "Content2"},
	{ id: 3, title: "Title 3", content: "Content3"},
	{ id: 4, title: "Title 4", content: "Content4"}
])
