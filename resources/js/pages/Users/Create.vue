<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users create',
        href: '/users'
    }
];

const form = useForm({
    name: '',
    email: '',
    password: ''
});
</script>

<template>
    <Head title="Users Create" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-3">

            <Link
                :href=" route('users.index') "
                class="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Back
            </Link>
            <div class="overflow-x-auto mt-4">
                <form class="space-y-6 mt-4 max-w-md mx-auto" @submit.prevent="form.post(route('users.store'))">
                    <div class="grid gap-2">
                        <label for="name" class="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">Name: </label>
                        <input id="name" name="name" v-model="form.name"
                                              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Enter name" />
                        <p v-if="form.errors.name" class="text-red-500 text-sm mt-1">{{ form.errors.name }}</p>
                    </div>
                    <div class="grid gap-2">
                        <label for="email" class="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">Email: </label>
                        <input id="email" name="email" v-model="form.email"
                                              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Enter email" />
                        <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{ form.errors.email }}</p>
                    </div>
                    <div class="grid gap-2">
                        <label for="name" class="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">Password: </label>
                        <input id="password" name="password" v-model="form.password"
                                              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Enter Password" />
                        <p v-if="form.errors.password" class="text-red-500 text-sm mt-1">{{ form.errors.password }}</p>
                    </div>
                    <button type="submit"
                            class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition">
                        Submit
                    </button>
                </form>

            </div>
        </div>

    </AppLayout>
</template>
