<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users Show',
        href: '/users'
    }
];

const props = defineProps({
    user: Object
});

</script>

<template>
    <Head title="Users Show" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-3">

            <Link
                :href=" route('users.index') "
                class="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Back
            </Link>
            <div class="overflow-x-auto mt-4">
                <div class="max-w-md mx-auto space-y-6">
                    <div class="grid gap-2">
                       <p> <strong>Name: </strong>{{user.name}}</p>
                    </div>
                    <div class="grid gap-2">
                        <p> <strong>Email: </strong>{{user.email}}</p>
                    </div>
                </div>
            </div>
        </div>

    </AppLayout>
</template>
