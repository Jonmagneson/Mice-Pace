200.times do
  name = Faker::Ancient.god
  location = Faker::Nation.nationality
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4')
  Profile.create(name: name, location: location, avatar: avatar)
end

puts "200 Profiles Seeded"
