<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head,Link, router} from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users'
    }
];

defineProps({
    users: {
        type: Array,
        default: () => []
    }
});

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        router.delete(
            route('users.destroy', id),
            {
                preserveScroll: true,
                onSuccess: () => {
                    console.log('User deleted successfully');
                },
                onError: (error) => {
                    // Handle error if needed
                    console.error('Error deleting user:', error);
                }
            }
        )
    }
}
</script>

<template>
    <Head title="Users" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-3">
            <Link
                :href=" route('users.create') "
                class="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Create
            </Link>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-sm text-left text-gray-700">
                    <thead class="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">ID</th>
                        <th scope="col" class="px-6 py-3">Name</th>
                        <th scope="col" class="px-6 py-3">Email</th>
                        <th scope="col" class="px-6 py-3 w-70">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in users" class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                        <td class="px-6 py-2 font-medium text-gray-900">{{user.id}}</td>
                        <td class="px-6 py-2 text-gray-700">{{user.name}}</td>
                        <td class="px-6 py-2 text-gray-700">{{user.email}}</td>
                        <td class="px-6 py-2 space-x-1">
                            <Link
                                :href=" route('users.edit', user.id)"
                                class="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Edit
                            </Link>
                            <Link
                                :href=" route('users.show', user.id) "
                                class="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                                Show
                            </Link>
                            <Link
                                @click="deleteUser(user.id) "
                                class="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                                Delete
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </AppLayout>
</template>
