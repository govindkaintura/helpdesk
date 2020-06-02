<?php

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $adminRole = Role::where('name', 'admin')->first();
        $agentRole = Role::where('name', 'agent')->first();
        $clientRole = Role::where('name', 'client')->first();

        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@ad.com',
            'password' => bcrypt('admin'),
        ]);

        $agent = User::create([
            'name' => 'Agent',
            'email' => 'agent@ad.com',
            'password' => bcrypt('agent'),
        ]);

        $client = User::create([
            'name' => 'client',
            'email' => 'client@ad.com',
            'password' => bcrypt('client'),
        ]);

        $admin->roles()->attach($adminRole);
        $agent->roles()->attach($agentRole);
        $client->roles()->attach($clientRole);
    }
}
