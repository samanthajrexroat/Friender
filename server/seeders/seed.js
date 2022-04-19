const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const { Hobby, User } = require("../models");
require("dotenv").config();

const seedDb = async () => {
	// TODO: fix link so .env links properly. template literal doesn't seem to work?
	await mongoose.connect(`mongodb+srv://root:root@cluster0.o20dk.mongodb.net/friender_DB`);
	await Hobby.deleteMany({});
	await User.deleteMany({});

	const usersToCreate = [
		{
			firstName: faker.name.findName(),
			lastName: faker.name.findName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			gender: faker.name.gender(),
			city: faker.address.city(),
			age: faker.mersenne.rand(100, 18),
			description: faker.lorem.sentence(),
			photo: faker.internet.avatar(),
		},
	];
	console.log(usersToCreate);
	const users = await User.insertMany(usersToCreate);

	const hobbiesToCreate = [
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
		{
			hobbyName: faker.lorem.sentence(1),
			hobbyAbout: faker.lorem.sentence(),
		},
	];
	console.log(hobbiesToCreate);
	const hobbies = await Hobby.insertMany(hobbiesToCreate);
	console.log("Database Successfully Seeded");

	process.exit(0);
};

seedDb();
