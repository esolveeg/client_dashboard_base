<template>
  <v-card class=''>
    <v-data-table
      :headers="opts.headers"
      :items="datatable.items"
      :loading="loading"
      :items-per-page="100"
      :search="search"
      fixed-header
      height="600px"
      sort-by="Name"
      class="elevation-1"
     
    >
      <template v-slot:top>
        <div class="">

          <v-toolbar flat>
            <v-toolbar-title>{{$t(`table.${opts.title}`)}}</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <slot name="actions"></slot>
            <!-- <modals-products-create/> -->
          </v-toolbar>
        </div>
        <div class="spacing-playground pa-6 mb-6">
          <v-row>
            <v-col
              cols="3"
              v-for="(fil, index) in opts.filters"
              :key="index"
            >
              <v-text-field
                v-model="form[fil.prop]"
                :clearable="fil.clearable"
                @keypress="isNumber($event)"
                @input="filter()"
                v-if="fil.type == 'number'"
                :label="$t(`inputs.${fil.label}`)"
              ></v-text-field>
              <v-select
                v-else-if="fil.type == 'select'"
                :items="fil.items"
                v-model="form[fil.prop]"
                :clearable="fil.clearable"
                :item-text="fil.itemText"
                :item-value="fil.itemValue"
                :label="$t(`inputs.${fil.label}`)"
              ></v-select>
              <v-menu
                v-else-if="fil.type == 'date'"
                :ref="fil.ref"
                clearable
                v-model="fil.menu"
                :close-on-content-click="true"
                :return-value.sync="fil.value"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="form[fil.prop]"
                    :label="fil.label"
                    clearable
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="form[fil.prop]"
                  clearable
                  no-title
                  scrollable
                >
                </v-date-picker>
              </v-menu>
              <!-- <builders-filter :filter="filter"/> -->
            </v-col>
            <v-col cols="8">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                :label="$t('inputs.search')"
                single-line
                hide-details
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="4"
              v-if="typeof opts.filters != 'undefined' && opts.filters.length > 0"
            >
              <v-btn
                color="primary"
                v-if="opts.rememberAble != false"
                class="capitalize w-full"
                @click.prevent="saveFilters()"
              >
                {{$t(`table.remember_my_choices`)}}
              </v-btn>
            </v-col>
          </v-row>

        </div>

      </template>
      <template v-slot:[`item.LimitedQnt`]="{ item }">
        <v-chip
          class="ma-2"
          color="red"
          label
          text-color="white"
          v-if="item.LimitedQnt"
        >
          <v-icon left>
            mdi-lock-alert-outline
          </v-icon>
          {{$t('table.limited')}}
        </v-chip>
        <v-chip
          class="ma-2"
          color="green"
          label
          text-color="white"
          v-else
        >
          <v-icon left>
            mdi-lock-open-variant-outline
          </v-icon>
          {{$t('table.not_limited')}}
        </v-chip>
      </template>
      <template v-slot:[`item.StopSale`]="{ item }">
        <v-chip
          class="ma-2"
          color="red"
          label
          text-color="white"
          v-if="item.StopSale"
        >
          <v-icon left>
            mdi-lock-alert-outline
          </v-icon>
          {{$t('table.stop_sale')}}
        </v-chip>
        <v-chip
          class="ma-2"
          color="green"
          label
          text-color="white"
          v-else
        >
          <v-icon left>
            mdi-lock-open-variant-outline
          </v-icon>
          {{$t('table.not_stop_sale')}}
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]="{ item }">

        <v-btn
          v-if="opts.editable !== false && (typeof item.closed_at == 'undefined' || item.closed_at == null)"
          @click="editItem(item)"
          color="primary"
          class="mr-4"
        >
          <v-icon
            small
            class="mr-2"
          >
            mdi-pencil
          </v-icon>
          {{$t('table.edit')}}

        </v-btn>
        <v-btn
          v-if="opts.viewable"
          @click="viewItem(item)"
          class="mr-4 mb-0"
        >
          <v-icon
            small
            class="mr-2"
          >
            mdi-eye
          </v-icon>
          {{$t('table.view')}}
        </v-btn>
        <slot
          name="itemActions"
          :item="item"
        ></slot>

      </template>
      <template v-slot:no-data>
        <span>{{$t('table.no_data')}}</span>
      </template>
    </v-data-table>
    <modals-global-delete @deleted="getData" />

    <slot name="modals"></slot>

  </v-card>
</template>
<script>
import datatable from '@/mixins/builders/datatable.js'
export default {
  mixins: [datatable]
}
</script>
